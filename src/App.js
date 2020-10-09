import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Pages from './components/Pages';
import Watch from './components/Watch';
import MarketPlace from './components/MarketPlace';
import Groups from './components/Groups';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Pages' component={Pages} />
        <Route path='/Watch' component={Watch} />
        <Route path='/MarketPlace' component={MarketPlace} />
        <Route path='/Groups' component={Groups} />
      </Switch>
      <section className='CopyRight2020'>
        <p className='CopyRightText'>
          Privacy · Terms · Advertising · Ad choices · Cookies · <br />
          More · Facebook © 2020
        </p>
      </section>
    </Router>
  );
}

export default App;
