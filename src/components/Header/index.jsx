import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.scss'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className='navbar'>
        <NavLink to="/" className={({isActive}) => isActive ? 'underline link' : 'link'}>Accueil</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'underline link' : 'link'}>A Propos</NavLink>
      </nav>
    </div>
  )
}

export default Header;