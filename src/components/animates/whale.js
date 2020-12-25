import React from 'react'
import {useSpring, animated} from 'react-spring'
import whale from '../../assets/img/Whale.png'

const Whale = ({innerWidth}) => {
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
      right: innerWidth > 420 ? '150px':'-50px',
      position: 'absolute',
      width: innerWidth > 420 ? '1000px':'500px',
      zIndex: 2,
      }}>
      <img 
        src={whale}
        style={{width: '100%'}}
        alt=""/>
    </animated.div>
  )
}

export default Whale