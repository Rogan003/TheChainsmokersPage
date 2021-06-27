import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'

function App() {
  return (
    <Router>
      <Route path = "/" exact component = {Home} />
      <Route path = "/albums" exact component = {Albums} />
    </Router>
  );
}

export default App;
