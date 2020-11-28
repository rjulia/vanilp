import React, {useState, useEffect} from "react";
import _ from 'lodash'
import { Parallax } from 'react-scroll-parallax';
import {getProjects} from './api'
import icon from './assets/img/linkedin-icon@3x.png'
import './app.scss'
import { 
  Footer,
  Menu
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
        <Menu/>
        <Parallax className="custom-class first" y={[0, 100]} x={[0, 20]} tagOuter="figure">
          <h2>Vani Ip</h2>
        </Parallax>
        <Parallax className="custom-class" y={[0, 100]} x={["50%", -20]} tagOuter="figure">
          <h2>UI/UX Designer</h2>
        </Parallax>
      </div>
      <Footer />
    </>
  );
}

export default App;
