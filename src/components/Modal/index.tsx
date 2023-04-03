import './modal.css'

import { Form } from '../FormModal'
import { FormModalPets } from '../FormModalPets'
import { FormModalCampaign } from '../FormModalCampaign'
import { useState } from 'react'

type ModalProps = {
  typeModal: 'donation' | 'pets' | 'campaigns'
  title: string
  id?: string
}

export const Modal: React.FunctionComponent<ModalProps> = ({typeModal, title, id}: ModalProps) => {

  const [showModal, setShowModal] = useState(true)

  function closeModal() {
    setShowModal(!showModal)
  }

  return (
    <div id="modal" className={ showModal ? '' : 'hide' }>
      <div className='fade' onClick={closeModal}>

      </div>

      <div className='modal'>
        <h2 style={{ color: '#fff' }} > {title} </h2>
        { typeModal == 'donation' ? <Form /> : typeModal == 'pets' ? <FormModalPets id={id} /> : <FormModalCampaign id={id} /> }
      </div>
    </div>
  )
}
