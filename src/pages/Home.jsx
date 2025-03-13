import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';


function Home() {
  return (
    <div>
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero-content'>
            <h2>Explore the World, One Country at a Time.</h2>
            <p>Discover the history, culture, and beauty of every nation. Sort. search, and
            filter through countries to find the details you need.</p>
            <NavLink to='/country' className="hero-btn">
              <button className='btn-content'><span>Start Exploring </span>
              <span className='btn-icon'><FaLongArrowAltRight /></span>
              </button> 
            </NavLink>
          </div>
          <div>
            <img src="/images/world.png" alt="worldimage" />
          </div> 
        </div>
      </section>
      <About />
    </div>
  )
}

export default Home
