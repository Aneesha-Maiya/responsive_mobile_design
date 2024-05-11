import React from 'react'
import sideImg from '../img/sideImg.jpg'

export default function Main() {
  return (
    <div className='MainPage'>
        <div className='mainContent'>
            <p className='HeroText'>Welcome to Perspectify</p>
            <div className='SubHeroText'>
                <p>We provide</p>
                <p className='Service'>APP DEVELOPMENT</p>
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
