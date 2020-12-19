import React, { useState, useEffect } from 'react'
import Menu from '../../assets/svg/menu-icon.svg'
import {ReactComponent as ReactLogo} from '../../assets/svg/menu-icon.svg'

import { useSpring, animated } from 'react-spring'
import './icon-menu.scss'

const IconMenu = ({offset, onOpenMenu, isOpenMenu, isAtHome}) => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setPosition(offset)
  }, [offset])

  const initialPosition = isAtHome ? 1200 : 0

  const [{opacity}, set] = useSpring(() => (
    {
      opacity: 1, 
      config: {
      duration: 0,
    }}
  ))

  set({opacity: position >= initialPosition ? 1 : 0})
  return (
    <animated.div
      style={{opacity: opacity && opacity.getValue()}} 
      className={
        isOpenMenu 
          ? 'container-icon-menu is-menu-open'
          : 'container-icon-menu is-menu-close'
      }>
      <div onClick={onOpenMenu} className={isAtHome ? 'box-icon-menu dark': 'box-icon-menu'}>
        <ReactLogo/>
      </div>
    </animated.div>
  )
}

export default IconMenu
