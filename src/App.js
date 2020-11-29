import React, {useState, useEffect} from "react";


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
  Whale
} from "./components";



function App() {
  
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   getProjects().then((response) => {
  //     setProjects(_.get(response, 'data.projectCollection.items')) 
  //   })
  // }, []);
  
  // if (!projects) {
  //   return "Loading...";
  // }

  return (
    <>
      <div className="container">
        <PlanetHeader />
        <Menu/>
        <Parallax className="custom-class first" y={[0, 5]} x={[0, -20]} tagOuter="figure">
         <Vani />
        </Parallax>
        <Parallax className="custom-class" y={[0, 5]} x={[0, 20]} tagOuter="figure">
          <Ux/>
        </Parallax>
        <Whale/>
      </div>
      <Footer />
    </>
  );
}

export default App;
