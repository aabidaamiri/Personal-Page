import React from 'react'
import "./header.css"
import hb from '../img/a.png'

const Header = () => {
  return (
    
    <>
      <header>
        <h3>My Personal Page</h3>
        <nav>
            <ul>
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about" data-scroll-nav="1">
                    <li>About</li>
                </a>
                <a href="#service">
                    <li>Services</li>
                </a>
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
                
            </ul>
        </nav>
        <img src={hb} alt=""/>
    </header>
    </>
  )
}

export default Header
