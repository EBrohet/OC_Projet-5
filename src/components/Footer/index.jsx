import logo from '../../assets/logo_b&w.png'
import '../../styles/Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <img  className='logo' src={logo} alt="logo" />
            <p className='copy'>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer