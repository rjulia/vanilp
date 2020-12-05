import React from 'react'
import './footer.scss'
import planet from '../../assets/img/Planet.png'

const Footer = () => {
  return (
    <div className="container-fluid-footer">
      <div className="continer-footer">
        <div className='box-title-footer'>
          <h3 className="title-footer">
            Get in touch
          </h3>
          <p className="content-footer">
            Thank you for viewing my profile.
            Contact me if you have any questions or anything.
            I definitely have so much more to share with you.
          </p>
        </div>
        <div className="content-contact">
          <p><span>icon</span><span>winglamip@gmail.com</span></p>
          <p><span>icon</span><span>+852 9792 3721</span></p>
        </div>
        <div className="content-copyright">
            <p>VANIIIP © 2020</p>
            <p>Designed by Vani Ip 	Developed by Ramon Julia</p>
        </div>
        <div className="moon-footer">
          <img 
            src={planet}
            style={{width: '100%'}}
            alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Footer