import React from 'react'
import AboutUsImg from '../img/AboutUsImg.jpg'

export default function AboutUs() {
  return (
    <div className = 'AboutUsSection'>
        <h2>ABOUT US</h2>
        <div className='AboutUsContent'>
            <div className='AboutUsText'>
                <p>We started as a group of college friends in our dorm room, helping local 
                businesses with small web projects. As we took on more challenges and designed
                creative solution, we grew into a full fledged development company<br/><br/>
                Now, we offer Website Development, App Development, Web app development, and 
                SaaS Product Solution to turn your ideas into reality.<br/><br/>
                Despite our growth, we've never lost our passion for innovation or our commitment
                to quality. We look forward to helping you bring your vision to life</p>
            </div>
            <div className='AboutUsImage'>
                <img src={AboutUsImg} alt='About-Us-Image'></img>
            </div>
        </div>
    </div>
  )
}
