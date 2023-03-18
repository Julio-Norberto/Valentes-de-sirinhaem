import './modal.css'

import { Form } from '../FormModal'

export const Modal: React.FunctionComponent = () => {

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
                <Form />
            </div>
        </div>
    )
}
