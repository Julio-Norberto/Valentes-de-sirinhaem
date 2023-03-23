import { Button } from '../Button'
import { Modal } from '../Modal'

import './campaignPageCards.css'

interface ICampaignPageCards {
  name?: string
  title: string
  image: any
  description?: string
  buttonTitle?: string
  destination: string
}

function hideOrShowModal(display: boolean) {
  const modal = document.querySelector('#modal')
  if(display) {
    modal!.classList.remove('hide')
  }
}

export const CampaignPageCards: React.FunctionComponent<ICampaignPageCards> = ({title, image, description, name, buttonTitle, destination}: ICampaignPageCards) => {
  return (
    <>
    <Modal title='Ajude essa campanha usando o pix através do QRCode' typeModal='donation' />
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

      <div onClick={() => hideOrShowModal(true)} className='card-adoption-button'>
        <Button paddingTop='13px' paddingBottom='14px' paddingLeft='40px' paddingRight='40px' title={ buttonTitle ? `${buttonTitle}` : `Ajudar ${name}`} destination={destination} />
      </div>

    </div>

  </div>
  </>
  )
}
