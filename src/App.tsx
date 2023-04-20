import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Web from './pages/Web';
import Mobile from './pages/Mobile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/web" component={Web} />
          <Route path="/mobile" component={Mobile} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
