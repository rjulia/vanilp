import React from 'react'
import {useSpring, animated} from 'react-spring'
import planet from '../../assets/img/Planet.png'

const PlanetHeader = () => {
  const { top, opacity } = useSpring({
    top: -300,
    opacity: 1,
    from: { 
      top: -400,
      opacity: 0
     },
    config: { duration: 1000 }
  })

  return (
    <animated.div style={{
      top,
      opacity,
      left: '-50px',
      position: 'absolute',
      width:'650px',
      zIndex: 100,
      }}>
      <img 
        src={planet}
        style={{width: '100%'}}
        alt=""/>
    </animated.div>
  )
}

export default PlanetHeader
