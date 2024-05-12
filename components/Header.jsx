import React, { useState } from 'react'
import Logo from '../img/logo-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  const [showMobileDropdown,setShowMobileDropdown] = useState(false)
  let MobileDropdown = document.getElementById('mobileDropdown')
  function showDropdown(){
    console.log("Show dropdown ",showMobileDropdown)
    // MobileDropdown.style.display = "initial"
    setShowMobileDropdown(!showMobileDropdown)
  }
  return (
    <div className='mainHeader'>
        <img src={Logo} alt='logo' className='logo'></img>
        <p className='CompanyName'>Perspectify</p>
        <div className='navBar'>
            <ul>
                <li><a href='#About-Us'>About Us</a></li>
                <li><a href='#About-Us'>Services</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Testimonials</a></li>
                <li><a>Contacts</a></li>
            </ul>
        </div>
        <div className='navToggle'>
            <FontAwesomeIcon icon={faBars} onClick={()=>{
              showDropdown()
            }}/>
        </div>
        {showMobileDropdown && <div className='MobileDropdown' id='mobileDropdown'>
            <ul>
                <li><a href='#About-Us'>About Us</a></li>
                <li><a href='#About-Us'>Services</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Testimonials</a></li>
                <li><a>Contacts</a></li>
            </ul>
        </div>}
    </div>
  )
}
