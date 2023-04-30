import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

import logo from '../../assets/images/Logo.png'

const NavBar = () => {
  return (
    <header className='header'>
        <div className="logo">
          <img src={logo} alt="Logo Drop" className='logo-img'/>
          <span className='logo-text'>Drop</span>
        </div>
        <nav>
          <ul>
            <li>Alimentos</li>
            <li>Bebidas</li>
            <li>Otros</li>
          </ul>
        </nav>
            <CartWidget/>
    </header>
  )
}

export default NavBar