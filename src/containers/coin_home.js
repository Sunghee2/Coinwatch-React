import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import CoinList from '../components/coin_list';
import Header from '../components/header_home';

class CoinHome extends Component {
  render() {
    return (
      <div className = 'CoinHome'>
        <div className = 'Header'>
          <Header/>
        </div>
        <div className = 'SearchBar'>
          <SearchBar/>
        </div>
        <div className = 'CoinList'>
          <CoinList/>
        </div>
      </div>
    );
  }
}

export default CoinHome;