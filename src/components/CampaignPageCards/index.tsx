import { Button } from '../Button'

interface ICampaignPageCards {
  name?: string
  title: string
  image: any
  description?: string
  buttonTitle?: string
  destination: string
}

export const CampaignPageCards: React.FunctionComponent<ICampaignPageCards> = ({title, image, description, name, buttonTitle, destination}: ICampaignPageCards) => {
  return (
    <div className='adoption-card-container'>

    <div className='adoption-card-content'>
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '1.5em' }} className='campaign-page-title'> {title} </h2>
      </div>

      <div className='card-image-adoption'>
        <img className='campaign-page-image' style={{ marginBottom: '24px' }} width={200} height={200} src={image} alt="" />
      </div>

      <div className='card-text-adoption'>
        <p style={{ width: '80%', margin: '0 auto' }} > {description} </p>
      </div>

      <div className='card-adoption-button'>
        <Button paddingTop='13px' paddingBottom='14px' paddingLeft='40px' paddingRight='40px' title={ buttonTitle ? `${buttonTitle}` : `Ajudar ${name}`} destination={destination} />
      </div>

    </div>

  </div>
  )
}
