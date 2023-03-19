import './modal.css'

import { Form } from '../FormModal'

type ModalProps = {
  typeModal: 'donation' | 'pets' | 'campaigns'
}

export const Modal: React.FunctionComponent<ModalProps> = ({typeModal}: ModalProps) => {

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')
  }

  return (
    <div id="modal" className="hide">
      <div className='fade' onClick={closeModal}>

      </div>

      <div className='modal'>
        <h2>Ajude essa campanha usando o pix <br /> através do QRCode </h2>
        { typeModal == 'donation' ? <Form /> : typeModal == 'pets' ? '' : '' }
      </div>
    </div>
  )
}
