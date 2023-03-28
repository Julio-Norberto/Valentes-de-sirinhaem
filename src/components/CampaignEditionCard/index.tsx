import { deleteDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db } from '../../services/firebase'
import { Modal } from '../Modal'
import './campaignEditionCard.css'

interface CanpaignEditionCardProps {
  title: string
  description: string
  image: any
  id: string
}

function hideOrShowModal(display: boolean) {
  const modal = document.querySelector('#modal')
  if(display) {
    modal!.classList.remove('hide')
  }
}

export const CampaignEditionCard: React.FunctionComponent<CanpaignEditionCardProps> = (props) => {
  const navigate = useNavigate()

  async function removeCampaign(id: string) {
    try {
      await deleteDoc(doc(db, "campaigns", id))
      alert("Campanha removida com sucesso!")
      navigate(0)
    } catch(e) {
      console.log("Erro: ", e)
    }
  }

  return (
    <div className='card-container'>
      <Modal title='Editar campanha' typeModal='campaigns' />
      <h2 style={{ marginBottom: '24px' }} >{props.title}</h2>
      <img src={props.image} alt={props.title} />

      <div className='btn-container'>
        <button onClick={() => hideOrShowModal(true)} className='btn-edit'>Editar informações</button>
        <button onClick={() => removeCampaign(props.id)} className='btn-remove'>Remover Campanha</button>
      </div>
    </div>
  )
}
