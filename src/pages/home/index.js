import _ from 'lodash'
import React, { useRef, useState, useEffect } from 'react'
import { Element} from 'react-scroll'
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
  MyProjects,
  IconMenu,
  MenuOverhead
} from "../../components";

const Home = props => {

  const [projects, setProjects] = useState([]);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  useEffect(() => {
    getProjects().then((response) => {
      setProjects(_.get(response, 'data.projectCollection.items')) 
    })
  }, []);
  
  const ref = useRef();
  const [pageYOffset, setPageYOffset] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0)

  
  const handleScroll = (event) => {
    const posY = ref.current.getBoundingClientRect().top;
    setInnerHeight(window.innerHeight)
    const offset = window.pageYOffset - posY;
    setPageYOffset(offset)
  };

  useEffect(() => {
    setInnerWidth(window.innerWidth)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!projects) {
    return "Loading...";
  }

  const onOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
    addClassBody(isOpenMenu)
  }
  
  const addClassBody = (menu) => {
    if (!menu) {
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
    }
  }
  return (
    <div ref={ref} style={{position: 'relative', backgroundColor: '#060726'}}>
      <IconMenu 
        offset={pageYOffset} 
        onOpenMenu={onOpenMenu} 
        isOpenMenu={isOpenMenu}
        isAtHome
      />
      <Parallax styleInner={{
          position: 'absolute',
          height: 'calc(100vh * 2)',
          top: 'calc(100vh - 350px)',
          zIndex: 2,
          left: innerWidth > 420 ? '50px' : '20px'
        }}
        y={['-420px', '300px']} 
        tagOuter="div">
        <a href="https://hk.linkedin.com/in/vani-ip" target="_blank">
          <img src={Linkedin} alt="linkeding logo"/>
        </a>
      </Parallax>
      <div className="secction container">
        <PlanetHeader innerWidth={innerWidth} />
        <Menu/>
        <Parallax className="main-title first" y={[0, 5]} x={[0, -20]} tagOuter="figure">
         <Vani innerWidth={innerWidth}/>
        </Parallax>
        <Parallax className="main-title" y={[0, 5]} x={[0, 20]} tagOuter="figure">
          <Ux/>
        </Parallax>
        <Parallax className="box-whale" y={[-10, 30]} tagOuter="div">
          <Whale innerWidth={innerWidth}/>
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Element name="about" className="element"></Element>
        <Parallax className="box-sections">
          {pageYOffset > innerHeight * 1.5  && <About innerWidth={innerWidth}/>}
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-sections" styleInner={{width: '100%'}}>
          {pageYOffset > innerHeight * 3  && <BeWhale innerWidth={innerWidth} />}
        </Parallax>
      </div>
      <div className="secction section-project" ref={ref}>
        <Element name="projects" className="element"></Element>
        <Parallax className="box-sections">
          {
            pageYOffset > innerHeight * 4  
            && <MyProjects projects={projects} innerWidth={innerWidth}/>
          }
        </Parallax>
      </div>
      <Element name="contact" className="element"></Element>
      <Footer innerWidth={innerWidth} />
      <MenuOverhead onOpenMenu={onOpenMenu} isOpenMenu={isOpenMenu}/>
    </div>
  )
}


export default Home
