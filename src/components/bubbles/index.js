import React from 'react'
import './bubbles.scss'
import {ReactComponent as Bubble} from '../../assets/svg/bubble.svg';

const Buubles = () => {
  return (
    <div className="container-bubbles">
      <Bubble />
      <span>Dive In</span>
    </div>
  )
}

export default Buubles
