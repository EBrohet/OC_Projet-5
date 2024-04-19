import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.scss'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className='navbar'>
        <Link to="/" className='link'>Accueil</Link>
        <Link to="/about" className='link'>A Propos</Link>
      </nav>
    </div>
  )
}

export default Header;