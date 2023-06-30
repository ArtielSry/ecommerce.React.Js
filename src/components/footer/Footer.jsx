import './footer.css';
import React from 'react'
import logo from '../../assets/logobw.png'

function Footer() {
  return (
    <div className='footer_container'>
      <img src={logo} alt='logo' />
      <p>- Developed by ArtSoraya</p>
    </div>
  )
}

export default Footer
