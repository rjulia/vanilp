import React from 'react'
import './tools.scss'
import { useSpring, animated } from 'react-spring'

const Tool = ({title, subtitle, percentage}) => {

  const { width } = useSpring({
    width: `${percentage}%`,
    from: {
      width: `5%`,
    },
    config: { duration: 1500 }
  })

  return (
    <div className="container-tool">
      <p>{title}<span>{subtitle}</span></p>
      <div className="external-bar">
        <animated.div 
          className="internal-bar"
          style={{width}}
          />
      </div>
    </div>
  )
}

export default Tool
