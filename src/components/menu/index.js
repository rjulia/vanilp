import React from 'react'
import './menu.scss'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Menu = () => {
  return (
    <div className='container-menu'>
      <div className="box-menu">
        <ul className="list-menu">
          <Link 
            activeClass="active" 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={2000} 
            >
            <li>About Me</li>
          </Link>
          <Link 
            activeClass="active" 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={2000} 
            >
            <li>Project</li>
          </Link>
          <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={2000} 
            >
            <li>Contact</li>
          </Link>
        </ul>

      </div>
    </div>
  )
}

export default Menu
