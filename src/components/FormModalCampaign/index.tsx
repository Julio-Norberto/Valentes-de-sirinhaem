import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, storage } from '../../services/firebase'
import './formModalCampaign.css'

type FormModalProps = {
  id: string | undefined
}

export const FormModalCampaign: React.FunctionComponent<FormModalProps> = ({id}: FormModalProps) => {

  useEffect(() => {
    async function handleSearchData() {
      if(id) {
        const docRef = doc(db, "campaigns", id!)
        const pet = await getDoc(docRef)
        const obj = pet.data()
        setTitle(obj!.title)
        setDescription(obj!.description)
        setImageUrl(obj!.imageUrl)
      }
    }

    handleSearchData()
  }, [id])

  async function registeCampaign(image: any, e: any) {
    e.preventDefault()
    const storageRef = ref(storage, `petsCampaign/${image?.name}`)
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
      const campaingRef = doc(db, "campaigns", id!)
      const data = await updateDoc(campaingRef, {
        title,
        description,
        imageUrl: downloadURL
      })
      alert("Campanha atualizada com sucesso!")
      setTitle("")
      setDescription("")
      navigate(0)
    } catch(e) {
      console.log("algo deu errado!")
    }
  }

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState<any>()
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  return (
    <div className='form-modal-container'>
      <div className='forms-pet'>
        <form>
          <div className='input-pet'>
            <label htmlFor="campaigntitle">Título da campanha:</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="campaigntitle" id="campaigntitle" placeholder='Cirurgia do Bob' />
          </div>

          <div className='input-pet'>
            <label htmlFor="campaign-description">Descrição:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='text-area-modal'
              style={{ padding: '8px', borderRadius: '8px' }}
              placeholder="Bob precisa de uma cirurgia na patinha..."
              name="campaign-description"
              id="campaign-description"
              cols={30}
              rows={10}>
            </textarea>
          </div>

          <div className='btn-div'>
            <input onChange={(e: any) => setImage(e.target.files[0])} type="file"  />
            <progress style={{ width: '40%', height: '20px' }} value={progress} max="100" />
          </div>

          <button onClick={(e) => image ? registeCampaign(image, e) : sendData("0", e)} className='btn-submit'>Editar campanha</button>
        </form>
      </div>
    </div>
  )
}
