import React from 'react'

import logoOne from "../../utilities/CRISTAR'S CO.png"
import bgMain from "../../utilities/walkator-klMii3cR9iI-unsplash.jpg"

import "./Home.css"

const Home = () => {
  return (
    <div>
      {/* <img src={logoOne} alt="logo" /> */}
      <div className='container'>
        <div className="row">
            <div className="Home-main">
                <span className='homeText'>
                    El Software perfecto, ¡Diseñado a tu medida!
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
