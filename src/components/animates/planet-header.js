import React from 'react'
import {useSpring, animated} from 'react-spring'
import planet from '../../assets/img/Planet.png'

const PlanetHeader = ({innerWidth}) => {
  const { top, opacity } = useSpring({
    top: innerWidth > 420 ? -300 : -100,
    opacity: 1,
    from: { 
      top: innerWidth > 420 ? -400 : -200,
      opacity: 0
     },
    config: { duration: 1000 }
  })

  return (
    <animated.div style={{
      top,
      opacity,
      left: innerWidth > 420 ? '-50px' : '-150px' ,
      position: 'absolute',
      width: innerWidth > 420 ? '650px' : '400px',
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
