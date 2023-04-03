import { Modal } from '../Modal'
import { useNavigate } from 'react-router-dom'

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './petEditionCard.css'
import { useState } from 'react'

interface PetEditionCardProps {
  name: string
  image: any
  id: string
}

export const PetEditionCard: React.FunctionComponent<PetEditionCardProps> = (props) => {

  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [showModal, setShowModal] = useState(false)

  function hideOrShowModal(id: string) {
    setShowModal(!showModal)
    setId(id)
  }

  async function removePet(id: string) {
    try {
      await deleteDoc(doc(db, "pets", id))
      alert("Pet removido com sucesso!")
      navigate(0)
    } catch(e) {
      console.log("Erro: ", e)
    }
  }

  return (
    <div className='card-container-pet-edition'>
      
      { showModal ? <Modal title='Editar pets' typeModal='pets' id={id} /> : '' }

      <img width={250} height={250} src={props.image} alt={props.name} />
      <h2>{props.name}</h2>

      <div className='btn-container'>
        <button onClick={() => hideOrShowModal(props.id)} className='btn-edit'>Editar informações</button>
        <button onClick={() => removePet(props.id)} className='btn-remove'>Remover pet</button>
      </div>
    </div>
  )
}
