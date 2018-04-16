import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/search_bar';
import SearchBar from './components/search_bar';
import CoinList from './components/coin_list';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header/>
        </div>
        <div className="SearchBar">
          <SearchBar/>
        </div>
        <div className="CoinList">
          <CoinList/>
        </div>
      </div>
    );
  }
}

export default App;
