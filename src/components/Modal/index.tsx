import './modal.css'

import { Form } from '../FormModal'
import { FormModalPets } from '../FormModalPets'
import { FormModalCampaign } from '../FormModalCampaign'
import { useEffect } from 'react'
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

type ModalProps = {
  typeModal: 'donation' | 'pets' | 'campaigns'
  title: string
  id?: string
}

export const Modal: React.FunctionComponent<ModalProps> = ({typeModal, title, id}: ModalProps) => {

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')
  }

  return (
    <div id="modal" className="hide">
      <div className='fade' onClick={closeModal}>

      </div>

      <div className='modal'>
        <h2 style={{ color: '#fff' }} > {title} </h2>
        { typeModal == 'donation' ? <Form /> : typeModal == 'pets' ? <FormModalPets id={id} /> : <FormModalCampaign /> }
      </div>
    </div>
  )
}
