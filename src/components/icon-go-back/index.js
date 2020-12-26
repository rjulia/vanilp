import React from 'react'
import { useHistory } from 'react-router-dom'
import {ReactComponent as RightArrow} from '../../assets/svg/right-arrow.svg'
import "./icon-go-back.scss";

const IconGoBack = () => {
  let history = useHistory()
  return (
    <div className="box-icon-go-back" type="button" onClick={() => history.goBack()}>
      <RightArrow />
    </div>
  )
}

export default IconGoBack
