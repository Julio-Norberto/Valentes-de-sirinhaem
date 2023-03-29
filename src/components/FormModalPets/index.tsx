import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// firebase
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../services/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import './formModalPets.css'

type ModalPetsProps = {
  id: string | undefined
}

export const FormModalPets: React.FunctionComponent<ModalPetsProps> = ({id}: ModalPetsProps) => {

  useEffect(() => {
    async function handleSearchData() {
      if(id) {
        const docRef = doc(db, "pets", id!)
        const pet = await getDoc(docRef)
        const obj = pet.data()
        setName(obj!.name)
        setAge(obj!.age)
        setRace(obj!.race)
        setWeight(obj!.weight)
        setImageUrl(obj!.imageUrl)
      }
    }

    handleSearchData()
  }, [id])

  async function registerPet(image: any, e: any) {
    e.preventDefault()
    const storageRef = ref(storage, `petsImages/${image?.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            sendData(downloadURL, e)
        })
      }
    )
  }

  async function sendData(downloadURL: string, e?: any) {
    e.preventDefault()
    if(downloadURL === "0") {
      downloadURL = imageUrl
    }
    try {
      const petRef = doc(db, "pets", id!)
      const dada = await updateDoc(petRef, {
        name,
        age,
        race,
        weight,
        imageUrl: downloadURL
      })
      alert("Pet atualizado com sucesso!")
      setName("")
      setAge("")
      setRace("")
      setWeight("")
      navigate(0)
    } catch(e) {
      console.log("algo deu errado!")
    }
  }

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [race, setRace] = useState("")
  const [weight, setWeight] = useState("")
  const [imageUrl, setImageUrl] = useState<any>()
  const [image, setImage] = useState()
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  return (
    <div className='form-modal-container'>
      <div className='forms-pet'>
        <form>
          <div className='input-pet'>
            <label htmlFor="petname">Nome do pet:</label>
            <input value={name ? name : ''} onChange={(e) => setName(e.target.value)} type="text" name="petname" id="petname" />
          </div>

          <div className='input-pet'>
            <label htmlFor="petage">Idade:</label>
            <input value={age ? age : ''} onChange={(e) => setAge(e.target.value)} type="text" name="petage" id="petage" placeholder='2' />
          </div>

          <div className='input-pet'>
            <label htmlFor="petrace">Raça:</label>
            <input value={race ? race : ''} onChange={(e) => setRace(e.target.value)} type="text" name="petrace" id="petrace" placeholder='Sansão' />
          </div>

          <div className='input-pet'>
            <label htmlFor="weird">Peso (kg):</label>
            <input value={weight ? weight : '' } onChange={(e) => setWeight(e.target.value)} type="text" name="weird" id="weird" placeholder='4' />
          </div>

          <div className='btn-div'>
            <input onChange={(e: any) => setImage(e.target.files[0])} type="file"  />
            <progress style={{ width: '40%', height: '20px' }} value={progress} max="100" />
          </div>

          <button onClick={(e) => image ? registerPet(image, e) : sendData("0", e)} className='btn-submit'>Editar pet</button>
        </form>
      </div>
    </div>
  )
}
