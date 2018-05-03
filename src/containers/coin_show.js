import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin, fetchCoinDetails } from '../actions';
import { bindActionCreators } from 'redux';

import Header from '../components/header_show';
import CoinInfoTop from '../components/coin_info_top';
import Chart from '../components/chart_in_coin_show';
import CoinInfoTabs from '../components/coin_info_tabs';
import OrderBook from '../components/order_book';
import Contracts from '../components/contracts';

// https://www.cryptocompare.com/api/data/coinlist/ 여기서 아이디 얻기
// https://www.cryptocompare.com/api/data/coinsnapshotfullbyid?id=1182

class CoinShow extends Component {
  componentDidMount() {
    // this.props.fetchCoin(this.props.match.params.id);
    this.props.fetchCoin(this.props.match.params.id);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render(){
    const coins = this.props.coins;
    const coin = this.props.match.params;
    if (!coins[coin.id] || coins[coin.id].length === 0) {
      return <div/>; //안됨 다른 걸로 바꾸기
    }
    const coin_price = this.props.coins[coin.id].KRW;
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
              <CoinInfoTabs id = {id}/>
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
    coins: state.coins.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinShow);