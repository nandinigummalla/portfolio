import React from 'react'
import './portfolio.css'
import { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      name: "Featured"
    },
    {
      id: "mobile",
      name: "Mobile app"
    },
    {
      id: "web",
      name: "Web App"
    }
  ]
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      default:
        setData(featuredPortfolio)
        break;
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {
          list.map((item) => (
            <PortfolioList
              title={item.name}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected} />
          ))
        }
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio
