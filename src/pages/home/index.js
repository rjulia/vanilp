import React, { useRef, useState, useEffect } from 'react'
import {
  useLocation
} from "react-router-dom";
import { Element} from 'react-scroll'
import { Parallax } from 'react-scroll-parallax';
import { useProjects } from '../../hook'
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
  MenuOverhead,
  IconSocialMedia,
  Bubbles,
  Helmet
} from "../../components";

const Home = props => {
  const location = useLocation()
  const {projects } = useProjects()
  const ref = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false)
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
  useEffect(()=> {
    if (location.hash) {
          let elem = document.getElementById(location.hash.slice(1))
          if (elem) {
              elem.scrollIntoView({behavior: "smooth"})
          }
      } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
      }
  }, [location,])

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
    <div 
      className="container-fluid" 
      ref={ref} 
      style={{position: 'relative', backgroundColor: '#060726'}}
      >
      <Helmet title="VANI IP | Portfolio" />
      <Element name="home" className="element" id="home"></Element>

      <IconMenu 
        offset={pageYOffset} 
        onOpenMenu={onOpenMenu} 
        isOpenMenu={isOpenMenu}
        isAtHome
      />
      {
        pageYOffset > innerHeight * 4 ? '' :<IconSocialMedia innerWidth={innerWidth} />
      }
      
      <div className="secction container">
        <PlanetHeader innerWidth={innerWidth} />
        <Menu/>
        <Parallax className="main-title first" x={innerWidth > 420 ? [0, -30] : [5, 0]} >
          <div className="box-main-title">
            <Vani innerWidth={innerWidth}/>
            <Ux innerWidth={innerWidth}/>
          </div>
        </Parallax>
        {/* <Parallax className="main-title" y={[0, 5]} x={[0, 20]} tagOuter="figure">
        </Parallax> */}
        <Parallax className="box-whale" y={[-10, 30]} tagOuter="div">
          <Whale innerWidth={innerWidth}/>
        </Parallax>
        <Parallax className="box-bubbles" y={innerWidth > 420 ? [0, 200] : [0, 120]}>
          <Bubbles innerHeight={innerHeight} pageYOffset={pageYOffset}/>
        </Parallax>
      </div>
      <div className="secction section-about" ref={ref}>
        <div className="oval-violet"/>
        <Element name="about" className="element" id="about"></Element>
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
        {/* <div className="oval-blue"/> */}
        <Element name="projects" className="element" id="projects" ></Element>
        <Parallax className="box-sections">
          {
            pageYOffset > innerHeight * 4  
            && <MyProjects projects={projects} innerWidth={innerWidth}/>
          }
        </Parallax>
      </div>
      <Element name="contact" className="element" id="contact"></Element>
      <Footer innerWidth={innerWidth} />
      <MenuOverhead 
        onOpenMenu={onOpenMenu} 
        isOpenMenu={isOpenMenu} 
        location={location}
        isAtHome={true}
      />
    </div>
  )
}


export default Home
