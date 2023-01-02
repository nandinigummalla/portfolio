import React from 'react'
import './portfolioList.css'

function PortfolioList({ title, id, active, setSelected }) {
    return (
        <li id={id} className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
