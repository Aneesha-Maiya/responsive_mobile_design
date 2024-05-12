import React, {useEffect, useState} from 'react'
import sideImg from '../img/sideImg.jpg'

export default function Main() {
  let providedService = ['APP DEVLOPMENT', 'WEBSITE DEVELOPMENT', 'WEB APP DEVELOPMENT', 'SAAS PRODUCT']
  let randomIndex = 0
  const [serviceName,setServicename] = useState(providedService[0])
  return (
    <div className='MainPage'>
        <div className='mainContent'>
            <p className='HeroText'>Welcome to Perspectify</p>
            <div className='SubHeroText'>
                <p>We provide</p>
                <p className='Service'>{serviceName}</p>
            </div>
            <p className='description'> Whether you are looking to build a website, create a mobile 
            app, or develop a custom software solution, we've got you covered. Contact us to bring your
            vision to life</p>
            <button className='ReachUsBtn'>Reach us</button>
        </div>
        <div className='sideContent'>
            <img src={sideImg} alt='side image' className='SideImage'></img>
        </div>
    </div>
  )
}
