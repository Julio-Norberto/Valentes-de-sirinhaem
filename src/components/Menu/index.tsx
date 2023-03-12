import './menu.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-removed-background.png'

export const Menu = () => {
  return (
    <div className='menu-container'>

      <div className='logo-menu'>
        <h1> <Link to='/'> <img width={85} src={logo} alt="" /> </Link> </h1>
      </div>

      <div className='menu-items'>
        <ul className='ul-list'>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/adoption'>Adoção</Link> </li>
          <li> <Link to='/campaign'>Campanhas</Link> </li>
          <li> <Link to='/donations'>Doações</Link> </li>
          <li> <Link to='/contact'>Contato</Link> </li>
          <li> <Link to='/panel'>Painel</Link> </li>
        </ul>
      </div>

    </div>
  )
}
