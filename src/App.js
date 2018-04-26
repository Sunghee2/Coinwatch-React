import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CoinHome from './containers/coin_home';
import CoinShow from './containers/coin_show';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Switch>
          <Route exact path = '/' component = {CoinHome}/>
          <Route path = '/:id' component = {CoinShow}/>
        </Switch>
      </div>
    );
  }
}

export default App;
