import React from 'react'
import './Hero.css'
import mpic3 from '../assets/mpic3.jpg'
import Muskan_cv from '../assets/Muskan--cv.pdf'

const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={mpic3} alt="" /> */}
      <div className="img"></div>
      <div className="hero-right">
        <h1><span>I'm Muskan</span>, a BCA graduate</h1>
        <p>Aspiring Frontend Developer crafting clean, responsive, and user-friendly interfaces</p>
        <div className="hero-action">
          <div className="hero-connect">
            <a href="#contact">Connect With Me</a>
          </div>
          <div className="hero-resume">
            <a href={Muskan_cv} download="Muskan_cv.pdf">
              Download Resume
            </a>
            {/* My resume */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
