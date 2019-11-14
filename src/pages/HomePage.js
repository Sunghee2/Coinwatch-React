import React, { Component } from 'react';
import CoinList from '../components/List';
import Header from '../components/HomeHeader';

class HomePage extends Component {
  render() {
    document.title = 'Coin Watch';
    return (
      <div className = 'CoinHome'>
        <div className = 'Header'>
          <Header/>
        </div>
        <div className = 'CoinList'>
          <CoinList/>
        </div>
      </div>
    );
  }
}

export default HomePage;