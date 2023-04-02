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
          Estamos sempre felizes em ouvir de você. Se você gostaria de se envolver com nossa causa, entre em contato conosco. Nosso objetivo é ajudar o máximo de animais possível, e sua contribuição é fundamental para o nosso sucesso.Obrigado pelo seu interesse em nossa ONG e esperamos falar com você em breve.
          </p>
        <div className='icons-contact'>
          <div className='Contact-img'>
            <img src={instagram}/>
            <a href=""><p>@valentes_sirinhaem</p></a>
          </div>
        </div>

        </div>

        <img src={contact} className='contact-img-out'/>
      </div>
        <Footer/>
    </div>
  )
}
