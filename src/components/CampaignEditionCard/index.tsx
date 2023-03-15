import './campaignEditionCard.css'

interface CanpaignEditionCardProps {
  description: string
  image: string
}

export const CampaignEditionCard: React.FunctionComponent<CanpaignEditionCardProps> = (props) => {
  return (
    <div className='card-container'>
      <h2>{props.description}</h2>
      <img src={props.image} alt={props.description} />

      <div className='btn-container'>
        <button className='btn-edit'>Editar informações</button>
        <button className='btn-remove'>Remover pet</button>
      </div>
    </div>
  )
}