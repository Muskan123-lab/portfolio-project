import React from 'react'
import './About.css'
import mpic3 from '../assets/mpic3.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">

        {/* left-section */}

        <div className="about-left">
          <img src={mpic3} alt="" />
        </div>

        {/* right-section */}

        <div className="about-right">
          <div className="about-para">
            <p>Recent BCA graduate with proficiency in HTML, CSS, JavaScript, and ReactJS. </p>

            <p>Seeking a challenging role as a Frontend Developer to leverage my technical skills, creativity, and passion<br></br> for web development to deliver high-quality user experiences and grow within a dynamic organization.</p>
          </div>

          {/* skills */}

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width:"70%"}}/>
            </div>

            <div className="about-skill">
              <p>JavaScript</p><hr style={{width:"60%"}}/>
            </div>

            <div className="about-skill">
              <p>React JS</p><hr style={{width:"50%"}}/>
            </div>

            <div className="about-skill">
              <p>Bootstrap</p><hr style={{width:"50%"}}/>
            </div>

            <div className="about-skill">
              <p>Git & GitHub</p><hr style={{width:"60%"}}/>
            </div>

          </div>
        </div>
      </div>

      <div className="about-educations">
        <div className="about-education">
          <h2>Panjab University</h2>
          <p>Bachelor of Computer Application 2021-2024
          </p>
        </div>
        <hr />

        <div className="about-education">
          <h2>12<sup>th</sup> from CBSE</h2>
          <p>Humanities 2021</p>
        </div>
        <hr />

        <div className="about-education">
          <h2>10<sup>th</sup> from CBSE</h2>
          <p>2019</p>
        </div>
        
      </div>

    </div>
  )
}

export default About
