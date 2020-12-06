import _ from 'lodash'
import React, { useRef, useState, useEffect } from 'react'
import {useSpring} from 'react-spring'
import { Parallax } from 'react-scroll-parallax';
import {getProjects} from '../../api'
import Linkedin from '../../assets/svg/Linkedin.svg'
import './home.scss'

import { 
  Footer,
  Menu,
  Vani,
  Ux,
  PlanetHeader,
  Whale,
  About,
  BeWhale,
  MyProjects
} from "../../components";

const Home = props => {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((response) => {
      setProjects(_.get(response, 'data.projectCollection.items')) 
    })
  }, []);
  
  const ref = useRef();
  const [pageYOffset, setPageYOffset] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    setPageYOffset(window.pageYOffset)
    setInnerHeight(window.innerHeight)
    const offset = window.pageYOffset - posY;
    set({offset});
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  if (!projects) {
    return "Loading...";
  }
  console.log(projects)
  return (
    <div className="container-fluid" ref={ref}>
      <Parallax styleInner={{
          position: 'absolute',
          height: 'calc(100vh * 2)',
          top: 'calc(100vh - 350px)',
          zIndex: 100,
          left: '50px'
        }}
        y={['-420px', '300px']} 
        tagOuter="div">
        <a href="https://hk.linkedin.com/in/vani-ip" target="_blank">
          <img src={Linkedin} alt="linkeding logo"/>
        </a>
      </Parallax>
      <div className="secction container">
        <PlanetHeader />
        <Menu/>
        <Parallax className="main-title first" y={[0, 5]} x={[0, -20]} tagOuter="figure">
         <Vani />
        </Parallax>
        <Parallax className="main-title" y={[0, 5]} x={[0, 20]} tagOuter="figure">
          <Ux/>
        </Parallax>
        <Parallax className="box-whale" y={[-10, 30]} tagOuter="div">
          <Whale/>
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-about">
          {offset && offset.getValue() > innerHeight * 1.5  && <About />}
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-about" styleInner={{width: '100%'}}>
          {offset && offset.getValue() > innerHeight * 3  && <BeWhale />}
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-about">
          {
            offset && offset.getValue() > innerHeight * 4  
            && <MyProjects projects={projects} />
          }
        </Parallax>
      </div>
      <Footer />
    </div>
  )
}


export default Home
