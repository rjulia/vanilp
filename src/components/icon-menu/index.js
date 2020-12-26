import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import {ReactComponent as MenuIcon} from '../../assets/svg/menu-icon.svg'

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
  const iconMenuClass = classNames({
    'container-icon-menu': true,
    'is-menu-open': isOpenMenu,
    'is-menu-close': !isOpenMenu,
    'is-at-home': isAtHome
  });

  set({opacity: position >= initialPosition ? 1 : 0})
  return (
    <animated.div
      style={{opacity: opacity && opacity.getValue()}} 
      className={iconMenuClass}>
      <div onClick={onOpenMenu} className={isAtHome ? 'box-icon-menu dark': 'box-icon-menu'}>
        <MenuIcon/>
      </div>
    </animated.div>
  )
}

export default IconMenu
