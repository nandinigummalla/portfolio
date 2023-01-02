import React, { useState } from 'react'
import './works.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing",
      img:
        "https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "App Development",
      desc:
        "Mobile application, is a software application developed specifically to run on small, wireless devices such as smartphones, tablets.,",
      img:
        "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=2000",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Api Development",
      desc:
        " API (Application Programming Interface) is a collection of instructions, and requirements that let a software or mobile application utilize the features/services of other applications, platform or devices for exceptional services.",
      img:
        "https://www.techaheadcorp.com/wp-content/uploads/2020/06/api-development.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (

    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="https://github.com/nandinigummalla" target="_blank"><span>Projects</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosIcon className="iconleft" onClick={() => handleClick("left")} />
      <ArrowForwardIosIcon className="iconright" onClick={() => handleClick()} />

    </div>
  )
}

export default Works
