import React, { useRef, useState, useCallback, useEffect } from 'react'
import classNames from 'classnames'
import {useSpring, animated} from 'react-spring'
import _ from 'lodash'
import { Parallax } from 'react-scroll-parallax';
import {getProjects} from './api'
import './app.scss'
import { 
  Footer,
  Menu,
  Vani,
  Ux,
  PlanetHeader,
  Whale,
  About,
  BeWhale
} from "./components";


function App() {
  
  // function Text({ children, offset, pos, start, end }) {
  //   console.log(children, offset, pos, start, end)
  //   // const [transform] = useState(() =>
  //   //   offset
  //   //     .interpolate({ range: [start, end], output: [100, 0], extrapolate: 'clamp' })
  //   //     .interpolate(s => `translate3d(${s}px,0,0)`),
  //   // )
  //   console.log(transform)
  //   // const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]))
  //   return <animated.div style={{ 
  //       position: 'absolute', 
  //       left: 0, 
  //       top: `${pos * 100}vh`, 
  //       transform, 
  //       opacity 
  //       }}>
  //         {children}
  //       </animated.div>
  // }

  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   getProjects().then((response) => {
  //     setProjects(_.get(response, 'data.projectCollection.items')) 
  //   })
  // }, []);
  
  // if (!projects) {
  //   return "Loading...";
  // }
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

  // var about = classNames({
  //   'box-about-show': pos > 0,
  //   'box-about': true,
  // });

  // const onScroll = useCallback(e => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])
  const calc = o => `translateY(-${o * 0.2}px)`;
  const op = x =>{
    const num = _.ceil(Math.abs(x) - innerHeight/1.2)/1000 
    return num
  }
  console.log(offset && offset.getValue(), innerHeight, innerHeight * 3.5)
  return (
    // <div className="container" ref={ref}>
    //   <div style={{ position: 'relative', height: '300vh', width: '100%', overflow: 'hidden' }}>
    //     {/* <Text offset={offset} pos={0} start={0} end={1} children="lorem" /> */}
    //     <animated.p style={{ 
    //     position: 'absolute', 
    //     left: 0, 
    //     top: `100vh`,
    //     transform: offset.interpolate(calc), 
    //     opacity: offset.getValue() > innerHeight/1.2 ? offset.interpolate(op) :0
    //     }}>
    //       lorem
    //     </animated.p>
    //     <p style={{top: "50vh", position: "absolute"}}>Hello</p>
    //   </div>
    // </div>

    <div className="container-fluid" ref={ref}>
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
          {offset.getValue() > innerHeight * 1.5  && <About />}
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-about" styleInner={{width: '100%'}}>
          {offset.getValue() > innerHeight * 3  && <BeWhale />}
        </Parallax>
      </div>
      <div className="secction" ref={ref}>
        <Parallax className="box-about">
          {offset.getValue() > innerHeight * 4  && <About />}
        </Parallax>
      </div>
      <Footer />
    </div>
  );
}

export default App;
