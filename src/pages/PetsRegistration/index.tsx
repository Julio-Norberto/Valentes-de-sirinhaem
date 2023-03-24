import { Bar } from '../../components/Bar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { db, storage } from '../../services/firebase.js'
import { collection, addDoc } from 'firebase/firestore'

import './petsRegistration.css'
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export const PetsRegistration: React.FunctionComponent = () => {

  async function registerPet(image: any) {
    if (!image) {
      alert("Por favor insira uma imagem")
      return
    }
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
              sendData(downloadURL)
          })
        }
      )
  }

  async function sendData(downloadURL: string) {
    try {
      const pet = await addDoc(collection(db, "pets"), {
        name,
        age,
        race,
        weight,
        imageUrl: downloadURL
      })
      console.log("pet cadastrado com sucesso!")
    } catch(e) {
      console.log("algo deu errado!")
    }
  }

  const [name, setName] = useState<string>()
  const [age, setAge] = useState<string>()
  const [race, setRace] = useState<string>()
  const [weight, setWeight] = useState<string>()
  const [image, setImage] = useState<any>()
  const [progress, setProgress] = useState<number>(0)

  return (
    <div>
      <Bar withMenu={true} />

      <form className='pets-register-form'>
        <h1 className='pets-register-form-title'>
          Cadastro de Pets
        </h1>

        <div className='div-input-pets'>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Nome do pet</label>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>

        <div className='div-input-pets'>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Idade</label>
          <input onChange={(e) => setAge(e.target.value)} className='input-box' type="text" />
        </div>

        <div className='div-input-pets'>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Raça</label>
          <input onChange={(e) => setRace(e.target.value)} className='input-box' type="text" />
        </div>

        <div className='div-input-pets'>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Peso (kg)</label>
          <input onChange={(e) => setWeight(e.target.value)} className='input-box' type="text" />
        </div>

        <div className='img-button-box'>
          <input onChange={(e: any) => setImage(e.target.files[0])} type="file"  />
          <progress value={progress} max="100" />
        </div>

        <div onClick={() => registerPet(image)} className='register-button-box'>
          <Button title={'Cadastrar Pet'} destination={''} paddingLeft={'70px'} paddingRight={'70px'} />
        </div>
      </form>
      <Footer />
    </div>
  )
}
