import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Documentation from './components/pages/Documentation';
import Developers from './components/pages/Developers';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/aegis" exact component={Home} />
          <Route path="/Documentation" component={Documentation} />
          <Route path="/Developers" component={Developers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
