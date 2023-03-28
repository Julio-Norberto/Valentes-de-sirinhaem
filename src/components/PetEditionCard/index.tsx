import { Modal } from '../Modal'
import './petEditionCard.css'

interface PetEditionCardProps {
  name: string
  image: any
}

function hideOrShowModal(display: boolean) {
  const modal = document.querySelector('#modal')
  if(display) {
    modal!.classList.remove('hide')
  }
}

export const PetEditionCard: React.FunctionComponent<PetEditionCardProps> = (props) => {
  return (
    <div className='card-container-pet-edition'>
      <Modal title='Editar pets' typeModal='pets' />
      <img width={250} height={250} src={props.image} alt={props.name} />
      <h2>{props.name}</h2>

      <div className='btn-container'>
        <button onClick={() => hideOrShowModal(true)} className='btn-edit'>Editar informações</button>
        <button className='btn-remove'>Remover pet</button>
      </div>
    </div>
  )
}
