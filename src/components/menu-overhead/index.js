import React from 'react'
import './menu-overhead.scss'
import Close from '../../assets/svg/close.svg'
import { Link } from 'react-scroll'

const MemuOverhead = ({onOpenMenu}) => {
  return (
    <div className="container-menu-overhead">
      <div className="box-menu-overhead">
      <div
        onClick={onOpenMenu}
        className="close-icon"
        >
        <img src={Close} alt='close'/>
      </div>
        <ul>
          <Link
            onClick={onOpenMenu}
            activeClass="active" 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={2000} 
            >
            <li>Home</li>
          </Link>
          <Link 
            onClick={onOpenMenu}
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
            onClick={onOpenMenu}
            activeClass="active" 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={2000} 
            >
            <li>Projects</li>
          </Link>
          <Link 
            onClick={onOpenMenu}
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

export default MemuOverhead
