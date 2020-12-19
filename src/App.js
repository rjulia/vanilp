import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Project, NoMatch} from './pages'
import {ScrollToTop} from './components'

function App() {
 
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:slug" component={Project}/>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
  </Router>
    
  );
}

export default App;
