import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'
import Shop from './components/Shop'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <Router>
      <Route path = "/" exact component = {Home} />
      <Route path = "/albums" exact component = {Albums} />
      <Route path = "/shop" exact component = {Shop} />
      <Route path = "/aboutus" exact component = {AboutUs} />
    </Router>
  );
}

export default App;
