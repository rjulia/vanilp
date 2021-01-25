import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as RightArrow} from '../../assets/svg/right-arrow.svg'
import "./icon-go-back.scss";

const IconGoBack = () => {
  return (
    <Link 
      className="box-icon-go-back" 
      type="button" 
      to='/'>
      <RightArrow />
    </Link>
  )
}

export default IconGoBack
