import React, { useRef, useEffect, useState } from 'react'
import './bubbles.scss'
import { Link } from 'react-scroll'
import { ReactComponent as Bubble } from '../../assets/svg/bubble.svg';

const Buubles = () => {
  const refBubbles = useRef();
  const [posYElement, setPosYElement] = useState(0)
  const [initialPosYElement, setInitialPosYElement] = useState(0)
  const handleScroll = (event) => {
    const posY = refBubbles.current.getBoundingClientRect().top;
    setPosYElement(posY)
  };

  useEffect(() => { 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const posY = refBubbles.current.getBoundingClientRect().top;
    setInitialPosYElement(posY)
  }, [])
  console.log(posYElement  / initialPosYElement, posYElement, initialPosYElement)
  return (
    <div
    ref={refBubbles}
    style={{
      opacity: posYElement === 0 
        ? 1  
        : posYElement  / initialPosYElement}}
    className="container-bubbles">
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={2000}
      >
        <div className="box-bubble">
          <Bubble />
          <span>Dive In</span>
        </div>
      </Link>
    </div>
  )
}

export default Buubles
