import React,{useRef, useState} from 'react'

import './Navbar.css'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {

  const[menu,setMenu]=useState("home");
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right="812px";
    menuRef.current.style.right="0px";
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-280px";
  }

  return (
    <div className='Navbar'>
      <h1>MUSKAN</h1>

      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>

      {/* navbar-menu */}
      
      <ul ref={menuRef}  className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><a href="#" className={menu === "home" ? "active" : " "}
          onClick={() => setMenu("home")}>Home</a></li>
        <li><a href="#about" className={menu === "about" ? "active" : " "}
          onClick={() => setMenu("about")}>About Me</a></li>
        <li><a href="#project" className={menu === "project" ? "active" : " "}
          onClick={() => setMenu("project")}>Projects</a></li>
        <li><a href="#contact" className={menu === "contact" ? "active" : " "}
          onClick={() => setMenu("contact")}>Contact</a></li>
      </ul>
      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
      {/* end of navbar menu */}

    </div>
  )
}

export default Navbar
