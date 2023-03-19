import './modal.css'

import { Form } from '../FormModal'
import { FormModalPets } from '../FormModalPets'
import { FormModalCampaign } from '../FormModalCampaign'

type ModalProps = {
  typeModal: 'donation' | 'pets' | 'campaigns'
  title: string
}

export const Modal: React.FunctionComponent<ModalProps> = ({typeModal, title}: ModalProps) => {

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')
  }

  return (
    <div id="modal" className="hide">
      <div className='fade' onClick={closeModal}>

      </div>

      <div className='modal'>
        <h2> {title} </h2>
        { typeModal == 'donation' ? <Form /> : typeModal == 'pets' ? <FormModalPets /> : <FormModalCampaign /> }
      </div>
    </div>
  )
}
