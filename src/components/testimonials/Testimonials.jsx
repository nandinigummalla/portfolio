import React from 'react'
import './testimonials.css'

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nandini Gummalla",
      title: "Software Developer",
      img:
        "assets/nand.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Full Stack Developer with 2+ years of experience. Hands on experience in developing web applications and rest API's.",
        featured: true,
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
            <a href="https://www.linkedin.com/in/nandini-gummalla-94957616a" target="_blank"><img src="assets/right-arrow.png" className="left" alt="" /></a>
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href="https://www.linkedin.com/in/nandini-gummalla-94957616a" target="_blank"><img className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Testimonials
