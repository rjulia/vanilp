import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import {ReactComponent as RightArrow} from '../../assets/svg/right-arrow.svg'
import "./icon-go-back.scss";

const IconGoBack = () => {
  let history = useHistory()
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
