import React from 'react'
import './intro.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/nandiniGummalla.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi I'm</h2>
          <h1>Nandini Gummalla</h1>
          <h2>Software Developer</h2>
            <a className="button" href="../assets/GUMMALLA_NANDINI_Resume.pdf" download="NandiniResume.pdf">
              Download Resume
            </a>
        </div>
        <a href="#testimonials">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Intro
