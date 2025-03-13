import React from 'react'
import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import FooterData from "../API/FooterData";
import { NavLink } from 'react-router-dom'




function Footer() {

  const iconlist = {
    FaLocationPin: <FaLocationPin />,
    IoCallSharp: <IoCallSharp />,
    IoIosMail: <IoIosMail />
  };

  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <div className='footer-card'>
          {FooterData.map((item, index) => {
            return (
              <div key={index} className='footer-item'>
                <div className='footer-icon'>{iconlist[item.icon]}</div>
                <div className='footer-text'>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='footer-lower'>
          <div className='footer-lower-container'>
          <p className='footer-copy'>&copy; 2025 World Atlas copy right. All rights reserved.
          </p>
          </div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink target='blank' to="https://www.instagram.com/rohit_singh_ashish?igsh=MW15YXR1aGxsOXdjZg==">Social</NavLink></li>
            <li><NavLink to="https://github.com/Rohit-Kr-Singh-Developer/WorldAtlas.git">Source Code</NavLink></li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Footer