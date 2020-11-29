import React from 'react'
import {useSpring, animated} from 'react-spring'
import whale from '../../assets/img/Whale.png'

const Whale = () => {
  const { top, opacity } = useSpring({
    top: 216,
    opacity: 1,
    from: { 
      top: 400,
      opacity: 0
     },
    config: { duration: 2000 }
  })

  return (
    <animated.div style={{
      top,
      opacity,
      right: '150px',
      position: 'absolute',
      width:'1000px',
      zIndex: 1,
      }}>
      <img 
        src={whale}
        style={{width: '100%'}}
        alt=""/>
    </animated.div>
  )
}

export default Whale