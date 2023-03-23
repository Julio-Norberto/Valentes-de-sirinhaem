import { Modal } from '../Modal'
import './campaignEditionCard.css'

interface CanpaignEditionCardProps {
  description: string
  image: string
}

function hideOrShowModal(display: boolean) {
  const modal = document.querySelector('#modal')
  if(display) {
    modal!.classList.remove('hide')
  }
}

export const CampaignEditionCard: React.FunctionComponent<CanpaignEditionCardProps> = (props) => {
  return (
    <div className='card-container'>
      <Modal title='Editar campanha' typeModal='campaigns' />
      <h2>{props.description}</h2>
      <img src={props.image} alt={props.description} />

      <div className='btn-container'>
        <button onClick={() => hideOrShowModal(true)} className='btn-edit'>Editar informações</button>
        <button className='btn-remove'>Remover pet</button>
      </div>
    </div>
  )
}
