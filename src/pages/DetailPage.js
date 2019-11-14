import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';
import { bindActionCreators } from 'redux';

import Header from '../components/ShowHeader';
import CoinInfoTop from '../components/InfoTop';
import Chart from '../components/ShowChart';
import CoinInfoTabs from '../components/InfoTab';
import OrderBook from '../components/OrderBook';
import Contracts from '../components/Contracts';

class DetailPage extends Component {
  componentDidMount() {
    this.props.fetchCoin(this.props.match.params.id);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render(){
    const coins = this.props.coins;
    const coin = this.props.match.params;
    if (!coins || !coins[coin.id] || coins[coin.id].length === 0) {
      return <div/>;
    }
    const id = this.props.location.state.id;
    return (
      <div className = 'CoinShow'>
        <div>
          <Header/>
        </div>
        <div className = 'CoinShow-body row'>
          <div className = 'col-8'>
            <div>
              <CoinInfoTop key = {coin.id} coin = {coin.id}/>
            </div>
            <div>
              <Chart coin = {coin.id}/>
            </div>
            <div className = 'mt-3'>
              <CoinInfoTabs id = {id} coin = {coin.id}/>
            </div>
          </div>
          <div className = 'col-4'>
            <div>
              <OrderBook key = {coin.id} coin = {coin.id}/>
            </div>
            <div>
              <Contracts key = {coin.id} coin = {coin.id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);