import React, { Component } from 'react';
import './App.css';
import CoinHome from './containers/coin_home';
import CoinShow from './containers/coin_show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinHome/>
        <CoinShow/>
      </div>
    );
  }
}

export default App;
