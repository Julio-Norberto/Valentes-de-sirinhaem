import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'

import './contact.css'

import instagram from '../../assets/instagram-logo.svg'
import whats from '../../assets/whatsapp-logo.svg'
import location from '../../assets/map-pin.svg'
import contact from '../../assets/contact.svg'

export const Contact: React.FunctionComponent = () => {
  return (
    <div className='Contact'>
        <Bar withMenu/>
      <div className='Contact-container'>
        <div className='Contact-text-and-midia'>
          <h1>
            Quer entrar em contato conosco?
          </h1>
          <h4>
            Você pode entrar em contato com a gente através das nossas <br/>redes sociais!
          </h4>
          <p className='midium-p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        <div className='icons-contact'>
          <div className='Contact-img'>
            <img src={instagram}/>
            <p>@valentes_sirinhaem</p>
          </div>

          <div className='Contact-img'>
            <img className='icon-whats-contact' src={whats}/>
            <p>@valentes_sirinhaem</p>
          </div>

          <div className='Contact-img'>
            <img className='icon-local-contact' src={location} />
            <p>@valentes_sirinhaem</p>
          </div>
        </div>

        </div>

        <img src={contact} className='contact-img-out'/>
      </div>
        <Footer/>
    </div>
  )
}
