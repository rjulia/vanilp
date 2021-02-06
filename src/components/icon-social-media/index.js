import React from 'react'
import Linkedin from '../../assets/svg/Linkedin.svg'
import './icon-social-media.scss'

const IconSocialMedia = ({innerWidth}) => {
  return (
    <div className="box-linkedin-icon">
      <a rel="noreferrer" href="https://hk.linkedin.com/in/vani-ip" target="_blank">
        <img src={Linkedin} alt="linkeding logo"/>
      </a>
    </div>
  )
}

export default IconSocialMedia
