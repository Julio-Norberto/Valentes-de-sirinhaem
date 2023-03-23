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
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
             <div className='Contact-img'>   
              <img src={instagram}/>
              <h4>@valentes_sirinhaem</h4>
             </div>

             <div className='Contact-img'>
              <img src={whats}/>
              <h4>@valentes</h4>
             </div>

             <div className='Contact-img'>
              <img src={location} />
              <h4>@Valentes</h4>
             </div> 
             
             </div>

             <img  src={contact} className='contact-img-out'/>
          </div>
            <Footer/>
        </div>
    )
}