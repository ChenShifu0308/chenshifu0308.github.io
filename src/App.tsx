import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import Web from './pages/Web';
import Mobile from './pages/Mobile';

function App() {
  return (
    <Router>
      <div className="App w-full lg:w-[1000px] mx-auto">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/blog" component={Blog} />
          <Route path="/web" component={Web} />
          <Route path="/mobile" component={Mobile} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
