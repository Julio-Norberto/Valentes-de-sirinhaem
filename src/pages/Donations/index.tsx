import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'

import './donations.css'

import Solidarity from "../../assets/Solidarity-bro.svg"
import qrcode from "../../assets/qrcode-pix.png"
import { Button } from '../../components/Button'

export const Donations: React.FunctionComponent = () => {
    return (
        <div className='Donation'>
            <Bar withMenu/>
            
        <div className='Donation-body'>
           

            
          <div className='Donation-qr-and-text'>
              <h1> Nos ajude doando qualquer valor </h1>
              <p>  
                  Você é uma peça fundamental nessa luta, nos ajude a continuar <br/> cuidando dos nossos amigos de quatro patas!
              </p>
              <div className='Donation-qr'>
                <img src={ qrcode } alt=""/>
              </div>  
           <p>chave pix: 44.997.656/0001-04 (CNPJ)</p>
           <div className='Donation-button'> 
            <p>Ou doe através do cartão</p>
          
            
            <Button title='Doar com cartão' destination=''/>
            </div>
          </div>
            
            
            <div className='Donation-image'>
            <img src={Solidarity} alt=""/>
            </div>
            
            
        </div>
            <Footer/>
        </div>
    )
}