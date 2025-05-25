import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";





function Header() {
    
    const [activeid, setActiveid] = useState(false);

    const handlebutton = () => {

        setActiveid(!activeid)
    };

  return (
    <section className='section-forall'>
        <header className='header'>
            <div>
               <NavLink to='/' className='logo'>
                <h1>WorldAtlas</h1>
               </NavLink>
            </div>
            <nav className={activeid ? 'mobile' : 'web'}>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/currencies'>Currencies</NavLink></li>
                    <li><NavLink to='/country'>Countries</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>

            <div className='ham-menu'>
                <button onClick={handlebutton}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </header>
    </section>
  )
}

export default Header