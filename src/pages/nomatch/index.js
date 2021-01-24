import React, { useRef, useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer';

import './nomach.scss'



const NoMatch = () => {
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 0,
    triggerOnce: true,
  });

  const { ref:refCot, inView:inViewOne, entry: entryTwo } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: `translateY(${inView ? 0 : 600}px`,
    config: { mass: 5, tension: 300, friction: 80 }
  })

  // const spring = useSpring({ transform: inView ? `translateY(0px)` : `translateY(600px)` })

  return (
    <div class="container-nomatch">
      {/* <animated.div style={{ ...spring, display: 'inline-block', background: '#f2f', height:'300px' }}>Translated Div</animated.div> */}

      <div style={{ position: 'relative', height: '200vh', width: '100%', overflow: 'hidden' }}>

      </div>
      <div ref={ref} style={{ width: '100%', borderTop: '1px solid #fff' }}>
        <animated.div style={{ ...spring, display: 'block', background: '#f2f', height:'300px', width: '50%', margin: '0px auto' }}>Translated Div</animated.div>
      </div>
      <div style={{ position: 'relative', height: '200vh', width: '100%', overflow: 'hidden' }}>

      </div>
      <div ref={refCot}>
        <h2>{`Header inside viewport ${inViewOne}.`}</h2>
      </div>
    </div>
  )
}

export default NoMatch
