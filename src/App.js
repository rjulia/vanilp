import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, Project, NoMatch} from './pages'



function App() {


  // const onScroll = useCallback(e => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])
  // const calc = o => `translateY(-${o * 0.2}px)`;
  // const op = x =>{
  //   const num = _.ceil(Math.abs(x) - innerHeight/1.2)/1000 
  //   return num
  // }
 
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:slug">
          <Project />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
  </Router>
    
  );
}

export default App;
