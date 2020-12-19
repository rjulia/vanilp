import React, { useState, useEffect } from 'react'
import Menu from '../../assets/svg/menu-icon.svg'
import { useSpring, animated } from 'react-spring'
import './icon-menu.scss'

const IconMenu = ({offset, onOpenMenu, isOpenMenu}) => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setPosition(offset)
  }, [offset])

  const [{opacity}, set] = useSpring(() => (
    {
      opacity: 0, 
      config: {
      duration: 0,
    }}
  ))

  set({opacity: position > 1200 ? 1 : 0})
  return (
    <animated.div
      
      style={{opacity: opacity && opacity.getValue()}} 
      className={
        isOpenMenu 
          ? 'container-icon-menu is-menu-open'
          : 'container-icon-menu is-menu-close'
      }>
      <div onClick={onOpenMenu} className="box-icon-menu">
        <img src={Menu} alt="menu icon"/>
      </div>
    </animated.div>
  )
}

export default IconMenu
