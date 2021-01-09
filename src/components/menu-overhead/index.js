import React from 'react'
import './menu-overhead.scss'
import {ReactComponent as Close} from'../../assets/svg/close.svg'
import { Link } from 'react-scroll'

const MemuOverhead = ({onOpenMenu, isOpenMenu}) => {
  return (
    <div className={isOpenMenu ? 'container-menu-overhead is-open-conteiner ': 'container-menu-overhead is-close-conteiner '}>
      <div className="box-menu-overhead">
      <div
        onClick={onOpenMenu}
        className="close-icon"
        >
        <Close />
      </div>
        <ul className={
          isOpenMenu
            ? 'menu is-open'
            :'menu is-close'}>
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
      <div className={isOpenMenu ? 'badground-menu is-open-badground-menu ': 'badground-menu is-close-badground-menu'}></div>
    </div>
  )
}

export default MemuOverhead
