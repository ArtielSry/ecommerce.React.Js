import './nav.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RiMenuFill, RiCloseFill } from 'react-icons/ri';


import React from 'react';
import PopUp from '../popup/PopUp';
import Footer from '../footer/Footer';

import logo from '../../assets/logo.png';
import CartProvider from '../../pages/bag/Cart';


// links del menu 
const MenuA = () => (
    <>
    <ul className='nav_ul column contenido'>
            <NavLink className="nav_link" to='/'
                        style={({ isActive }) => {
                            return { color: isActive ? 'black' : 'grey'};
                        }} >    Home    </NavLink>
            <NavLink className="nav_link" to='/Store' 
                        style={({ isActive }) => {
                            return { color: isActive ? 'black' : 'grey'};
                        }} >    Store   </NavLink>
        </ul> 
    </>
)

const MenuLogo = () => (
    <>
    <ul className='nav_ul'>
        <NavLink to='/'><img src={logo} alt='logo'/></NavLink>
    </ul>
    </>
)

const MenuB = () => (
    <>
    <ul className='nav_ul'>
            <p className="nav_link icon"><PopUp/></p>
    </ul>
    </>
)


function Nav() {

    const  [toggleMenu, setToggleMenu] = useState(false);

  return (
    <CartProvider>
        <nav className='navbar' id='sidebar'>
            
            <div className='navbar-container'>
                <MenuA/>
                <MenuLogo/>
                <MenuB/>
            </div>

            <div className='product__navbar-menu'>  
                <MenuLogo/>
                <div className='menu-links'>
                <MenuB/>
                {toggleMenu 
                ? <RiCloseFill className='icon icon-open' color="black" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenuFill className='icon icon-open' color="black" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                <div className='product__navbar-menu_container'>  
                    <MenuA/>
                    <Footer/>
                </div>
            )}
                </div>
            </div>

        </nav>
    </CartProvider>
  )
}

export default Nav;