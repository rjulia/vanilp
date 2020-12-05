import React from 'react'
import { useSpring, animated } from 'react-spring'
import './about.scss'
import Tools from '../tools/tools'
import profilepic from '../../assets/img/profilepic.png'
const About = () => {
  const { left, opacity } = useSpring({
    opacity: 1,
    left: 0,
    from: {
      left: -100,
      opacity: 0
    },
    config: { duration: 1000 }
  })

  return (
    <div className="container-profile">
      <animated.div style={{
        position: 'absolute',
        left,
        opacity,
        zIndex: 2,
      }}>
        <p className="title">About me</p>
      </animated.div>
      <div className='box-profile'>
        <div className="content-profile">
          <p>Hi, I am Vani. A detail-oriented UI/UX Designer from Hong Kong with 2+ years of experience. <br/>
          Specialized in identifying UX problems and designing intuitive user interfaces. Excellent bilingual (Cantonese and English) communication skills with the experience of working in a cross-cultural team. I am now open for any job opportunities.</p>
          <Tools />
        </div>
        <div className="image-profile">
          <img src={profilepic} alt="vani ip"/>
        </div>
      </div>


    </div>
  )
}

export default About