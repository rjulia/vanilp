import React from 'react'
import { useSpring, animated } from 'react-spring'
import './bewhale.scss'
import whale from '../../assets/img/Whale.png'




const BeWhale = () => {

  const { filter } = useSpring({
    filter: 'blur(0)',
    from: {
      filter: 'blur(50px)',
    },
    config: { duration: 1000 }
  })
  return (
    <div className="container-be-whale">
      <div className="background-be-whale"></div>

      <animated.h4 className="title-be-whale" style={{filter}}>Be like a whale.</animated.h4>
      <p className="text-be-whale">The smallest things mold us for the greater good</p>
      <div className="image-be-whale">
        <img src={whale} alt=""/>
      </div>
    </div>

  )
}

export default BeWhale
