import React from 'react'
import './Project.css'
import porschep from '../assets/porsche-p.jpg'

const Project = () => {
  return (
    <div className='project' id='project'>
      <div className="project-title">
        <h1>Latest Projects</h1>
      </div>
      <div className="project-card">
        {/* card 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front front-img1">
              {/* <img src={mpic3} alt="Avatar"/> */}
            </div>
            <div className="flip-card-back">
              <a href="https://muskan123-lab.github.io/bootproject/">Visit Site</a>
            </div>
          </div>
        </div>
        {/* end card 1 */}
        {/* card 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front front-img2">
              {/* <img src={mpic3} alt="Avatar"/> */}
            </div>
            <div className="flip-card-back">
              <a href="https://muskan123-lab.github.io/Ms_charity/">Visit Site</a>
            </div>
          </div>
        </div>
        {/* end card 2 */}
        {/* card 3 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front front-img3">
              {/* <img src={mpic3} alt="Avatar"/> */}
            </div>
            <div className="flip-card-back">
              <a href="https://muskan123-lab.github.io/glimra/">Visit Site</a>
            </div>
          </div>
        </div>
        {/* end card 3 */}
      </div>
    </div>
  )
}

export default Project
