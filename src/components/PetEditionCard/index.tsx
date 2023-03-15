import './petEditionCard.css'

interface PetEditionCardProps {
  name: string
  image: string
}

export const PetEditionCard: React.FunctionComponent<PetEditionCardProps> = (props) => {
  return (
    <div className='card-container'>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>

      <div className='btn-container'>
        <button className='btn-edit'>Editar informações</button>
        <button className='btn-remove'>Remover pet</button>
      </div>
    </div>
  )
}
