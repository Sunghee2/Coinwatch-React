import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/:id' component = {DetailPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
