import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Linkedin from '../../assets/svg/Linkedin.svg'

const IconSocialMedia = ({innerWidth}) => {
  return (
    <Parallax styleInner={{
      position: 'absolute',
      height: 'calc(100vh * 2)',
      top: innerWidth > 420 ? 'calc(100vh - 350px)' : 'calc(100vh - 50px)',
      zIndex: 2,
      left: innerWidth > 420 ? '50px' : '20px'
    }}
    y={['-420px', '300px']} 
    tagOuter="div">
    <a rel="noreferrer" href="https://hk.linkedin.com/in/vani-ip" target="_blank">
      <img src={Linkedin} alt="linkeding logo"/>
    </a>
  </Parallax>
  )
}

export default IconSocialMedia
