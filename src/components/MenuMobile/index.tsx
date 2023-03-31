import './menuMobile.css'

import { Link } from 'react-router-dom'
import { List } from '@phosphor-icons/react'
import { useRef, useState } from 'react'

export const MenuMobile:React.FunctionComponent = () => {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  console.log(isActive)

  return (
    <div className="menu-mobile-container">
      <div className="menu-mobile-content">
        <button onClick={onClick}> <List size={32} /> </button>
      </div>

      <nav className={`menu-mobile ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/adoption'>Adoção</Link> </li>
          <li> <Link to='/campaign'>Campanhas</Link> </li>
          <li> <Link to='/donations'>Doações</Link> </li>
          <li> <Link to='/contact'>Contato</Link> </li>
          <li> <Link to='/panel'>Painel</Link> </li>
        </ul>
      </nav>
    </div>
  )
}
