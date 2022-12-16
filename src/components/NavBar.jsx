import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productNameThunk } from '../store/slices/products.slice';
import '../styles/navbar.css'
import Cart from './Cart';

const NavBar = () => {

  const [isVisible, setIsVisible] = useState(false)

  const dispath = useDispatch()
  const [inputValue, setInputValue] = useState("")

  const show = () => {
    const menu = document.querySelector('.menu')
    menu?.classList.toggle('down')
  }

  const showCart = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
    {
      isVisible && <Cart/>
    }
   
      <header className='nav_container'>
        <div className="logo_container">
          <img src="https://www.designfreelogoonline.com/wp-content/uploads/2017/10/000895-website-Ecommerce-logo-maker-05.png" alt="e-commerce" className='logo' />
        </div>
        <div className="input_container">
          <section className='label'>
            <input type="text" className='nav_input'
              id='search'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </section>
          <button onClick={() => dispath(productNameThunk(inputValue))}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="hamburguese" className='hamburger' onClick={show} />
        <nav className='menu'>
          <ul className='Nav_links'>
            <li className='select'><Link to='/' className='nav_link'>Home</Link></li>
            <li className='select'><Link to='/login' className='nav_link' >Login</Link></li>
            <li className='select'><Link to='/purchases' className='nav_link'>Purchases</Link></li>
            <li><Link className='nav_link'><i className="fa-solid fa-cart-shopping" onClick={showCart}></i></Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;