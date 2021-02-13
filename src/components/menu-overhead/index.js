import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useHistory, Link, useLocation } from 'react-router-dom'

import './menu-overhead.scss'
import { ReactComponent as Close } from '../../assets/svg/close.svg'
import { Link as LinkScroll } from 'react-scroll'

const MemuOverhead = ({ onOpenMenu, isOpenMenu }) => {
  const [isAtHome, setIsAtHome] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsAtHome(location.pathname === "/")
  }, [location])
  return (
    <div
      className={isOpenMenu ? 'container-menu-overhead is-open-conteiner ' : 'container-menu-overhead is-close-conteiner '}>
      <div
        className={isAtHome ? "box-menu-overhead" : "box-menu-overhead project-box-menu-overhead"}>
        <div
          onClick={onOpenMenu}
          className={isAtHome ? 'close-icon' : 'close-icon project-close-icon'}
        >
          <Close />
        </div>
        <ul className={
          isOpenMenu
            ? 'menu is-open'
            : 'menu is-close'}>
          {
            isAtHome
              ? (
                <>
                  <Link
                    onClick={onOpenMenu}
                    to="/"
                  >
                    <li>Home</li>
                  </Link>
                  <LinkScroll
                    onClick={onOpenMenu}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <li>About Me</li>
                  </LinkScroll>

                  <LinkScroll
                    onClick={onOpenMenu}
                    activeClass="active"
                    to={"projects"}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <li>Projects</li>
                  </LinkScroll>


                  <LinkScroll
                    onClick={onOpenMenu}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <li>Contact</li>
                  </LinkScroll>
                </>
              ) : (
                <>
                  <Link
                    onClick={onOpenMenu}
                    to="/"
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    onClick={onOpenMenu}
                    to="/#about"
                  >
                    <li>About Me</li>
                  </Link>
                  <Link
                    onClick={onOpenMenu}
                    to="/#projects"
                  >
                    <li>Projects</li>
                  </Link>
                  <Link
                    onClick={onOpenMenu}
                    to="/#contact"
                  >
                    <li>Contact</li>
                  </Link>
                </>
              )
          }

        </ul>
      </div>
      <div className={isOpenMenu ? 'badground-menu is-open-badground-menu ' : 'badground-menu is-close-badground-menu'}></div>
    </div>
  )
}

export default MemuOverhead
