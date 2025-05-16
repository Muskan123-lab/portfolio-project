import React from 'react'
import './Footer.css'
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-top">
        {/* top left */}
        <div className="footer-top-left">
          <h1>MUSKAN</h1>
          <p>Crafting clean and creative web experiences.</p>
        </div>
        {/* end of top left */}

        {/* top right */}

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email'/>
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
        {/* end of top right */}
        
      </div>

      <hr />

      {/* footer bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &#169; 2025 Muskan. All Rights Reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
        {/* end of footer bottom */}
        

    </div>
  )
}

export default Footer
