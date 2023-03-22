import { Bar } from '../../components/Bar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { db } from '../../services/firebase.js'
import { collection, addDoc } from 'firebase/firestore'

import './petsRegistration.css'
import { useState } from 'react'

export const PetsRegistration: React.FunctionComponent = () => {

  async function registerPet() {
    try {
      const pet = await addDoc(collection(db, "pets"), {
        name,
        age,
        race,
        weight
      })
      console.log("pet cadastrado com sucesso!")
    } catch (e) {
      console.log("erro ao cadastrar")
    }
  }

  const [name, setName] = useState<string>()
  const [age, setAge] = useState<string>()
  const [race, setRace] = useState<string>()
  const [weight, setWeight] = useState<string>()

  return (
    <div>
      <Bar withMenu={true} />

      <form className='pets-register-form'>
        <h1 className='pets-register-form-title'>
          Cadastro de Pets
        </h1>

        <div>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Nome do pet</label>
          <input onChange={(e) => setName(e.target.value)} className='input-box' type="text" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Idade</label>
          <input onChange={(e) => setAge(e.target.value)} className='input-box' type="text" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Raça</label>
          <input onChange={(e) => setRace(e.target.value)} className='input-box' type="text" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold' }} htmlFor="">Peso (kg)</label>
          <input onChange={(e) => setWeight(e.target.value)} className='input-box' type="text" />
        </div>

        <div className='img-button-box'>
          <Button paddingBottom='10px' paddingTop='10px' title={'Enviar Imagem'} destination={''} paddingLeft={'12px'} paddingRight={'12px'} />
        </div>

        <div onClick={registerPet} className='register-button-box'>
          <Button title={'Cadastrar Pet'} destination={''} paddingLeft={'70px'} paddingRight={'70px'} />
        </div>
      </form>
      <Footer />
    </div>
  )
}
