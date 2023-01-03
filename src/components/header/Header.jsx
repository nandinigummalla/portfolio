import React from 'react'
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

function Header({menuOpen,setMenuOpen}) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Nandini</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 8897279757</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>nandinigummalla27@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header
