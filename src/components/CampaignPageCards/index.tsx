import { Button } from '../Button'

interface ICampaignPageCards {
  name: string
  title: string
  image: any
  description: string
}

export const CampaignPageCards: React.FunctionComponent<ICampaignPageCards> = ({title, image, description, name}: ICampaignPageCards) => {
  return (
    <div className='adoption-card-container'>

    <div className='adoption-card-content'>
      <div>
        <h2 style={{ marginBottom: '24px' }} className='campaign-page-title'> {title} </h2>
      </div>

      <div className='card-image-adoption'>
        <img className='campaign-page-image' style={{ marginBottom: '24px' }} width={200} height={200} src={image} alt="" />
      </div>

      <div className='card-text-adoption'>
        <p style={{ width: '80%', margin: '0 auto' }} > {description} </p>
      </div>

      <div className='card-adoption-button'>
        <Button paddingLeft='40px' paddingRight='40px' title={`Ajudar ${name}`} destination='/adoption' />
      </div>

    </div>

  </div>
  )
}
