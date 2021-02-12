import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import name from '../../const/name'
import smallName from '../../const/small-name'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const Vani = ({innerWidth}) => {
  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
    to: { scale: 90, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 }
  })
  return (
    <animated.svg 
    style={{ 
      transform, 
      opacity,
      zIndex: 10
    }}
    width={424} 
    viewBox="0 0 500 40" >
    <defs>
      <filter id="water">
        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8" />
        <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
      </filter>
    </defs>
    <g filter="url(#water)">
      <animated.path
        d={innerWidth > 420 ? name() : smallName()}
        fill="#F1F4FA"
      />
    </g>
  </animated.svg>
  )
}

export default Vani
