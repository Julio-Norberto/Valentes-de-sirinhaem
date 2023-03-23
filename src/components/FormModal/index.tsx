import './formModal.css'

import qrcode from '../../assets/qrcode-pix.png'

export const Form: React.FunctionComponent = () => {
  return (
    <div className='modal-content'>
      <div className='qr-code'>
        <img width={340} src={qrcode} alt="" />
      </div>

      <div className='modal-text-button'>
        <h3>Ou faça sua doação através do cartão</h3>
        <h4>Em caso de pix por favor adicione o nome do animalzinho na descrição do pix!</h4>
        <a href="#" className='btn-modal'>Doar com cartão</a>
      </div>
    </div>
  )
}
