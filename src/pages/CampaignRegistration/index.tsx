import { useState } from 'react'
import { Bar } from '../../components/Bar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

import { db, storage } from '../../services/firebase.js'
import { collection, addDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import './campaignRegistration.css'

export const CampaignRegistration: React.FunctionComponent = () => {

  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [image, setImage] = useState<any>()
  const [progress, setProgress] = useState<number>(0)

  async function registerPet(image: any) {
    if (!image) {
      alert("Por favor insira uma imagem")
      return
    }
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
              sendData(downloadURL)
          })
        }
      )
  }

  async function sendData(downloadURL: string) {
    try {
      const campaign = await addDoc(collection(db, "campaigns"), {
        title,
        description,
        imageUrl: downloadURL
      })
      console.log("campanha cadastrada com sucesso!")
      alert("Campanha cadastrada com sucesso!")
    } catch(e) {
      console.log("algo deu errado!")
    }
  }

    return (
        <div className='campaign-register-container'>
            <Bar withMenu={true} />

            <div className='campaign-content'>
              <form>
                <h1>Cadastrar nova campanha</h1>
                <div className='div-inputs-campaign'>
                  <label htmlFor="">Título da campanha</label>
                  <input onChange={(e) => setTitle(e.target.value)} name='title' id='title' type="text" placeholder='Cirurgia do bob...' />
                </div>

                <div className='div-inputs-campaign'>
                  <label htmlFor="">Descrição</label>
                  <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="description" cols={40} rows={9} placeholder="O bob está com a patinha machucada e precisa de tratamento..." ></textarea>
                </div>

                <div className='img-button'>
                  <p style={{ marginBottom: '10px' }} >Enviar imagem</p>
                  <input onChange={(e: any) => setImage(e.target.files[0])} type="file"  /> <br />
                  <progress value={progress} max="100" />
                </div>

                <div onClick={() => registerPet(image)} className='register-button-box'>
                  <Button title={'Cadastrar campanha'} destination={''} paddingLeft={'70px'} paddingRight={'70px'} />
                </div>

              </form>
            </div>

            <Footer />
        </div>
    )
}
