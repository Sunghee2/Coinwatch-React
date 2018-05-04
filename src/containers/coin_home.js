import React, { Component } from 'react';
import CoinList from '../components/coin_list';
import Header from '../components/header_home';

class CoinHome extends Component {
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

export default CoinHome;