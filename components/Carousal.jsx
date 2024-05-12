import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faDiscord,faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Carousal() {
    
  return (
    <div className='CarousalComponent'>
        {/* <h1>OUR CUSTOMERS</h1> */}
        <Carousel
            axis='horizontal'
            showThumbs = {false}
            showStatus = {false}
            centerMode = {true}
            autoPlay = {true}
            infiniteLoop = {true}
            className='LogoCarousal'
            dynamicHeight = {false}
            centerSlidePercentage={50}
            showIndicators = {false}
        >
            <div className='CarousalItem'> 
                <p>Logo 1</p>
                <FontAwesomeIcon icon={faLinkedin} className='SponsorLogo'/>
            </div>
            <div className='CarousalItem'>
                <p>Logo 2</p>
                <FontAwesomeIcon icon={faGithub} className='SponsorLogo'/>
            </div>
            <div className='CarousalItem'>
                <p>Logo 3</p>
                <FontAwesomeIcon icon={faDiscord} className='SponsorLogo'/>
            </div>
            <div className='CarousalItem'>
                <p>Logo 4</p>
                <FontAwesomeIcon icon={faYoutube} className='SponsorLogo'/>
            </div>
        </Carousel>
    </div>
  )
}
