import React from 'react'
import './NavBar.css'
import logo from '../../assets/cat.png';
import logo1 from '../../assets/netflix-logo.png';

function NavBar() {
  return (
    <div className='navbar'>
        <img src={logo1} alt="netflix" className='nextflix-logo'/>
        <img src={logo} alt="user" className='avatar'/>
    </div>
  )
}

export default NavBar