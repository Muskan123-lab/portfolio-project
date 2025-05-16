import React from 'react'
import './Cont.css'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

const Cont = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className='contact-section'>
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>As a fresher stepping into the world of frontend development, I'm excited to contribute, learn, and grow. I'm open to opportunities, collaborations -let's connect!</p>
          {/* contact details */}
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>muskankhatoon@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>01234567890</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Chandigarh</p>
            </div>
          </div>
          {/* end of details */}
        </div>
        {/* end of ledt section */}

        {/* right section */}
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>

          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="5" placeholder='Enter your message'></textarea>

          <button type='submit' className='contact-submit'>Submit</button>
        </form>
        {/* end of right section */}
      </div>
    </div>
  )
}

export default Cont
