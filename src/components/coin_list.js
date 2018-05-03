import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import Loader from 'react-loaders';

import Card from './coin_card';
import { fetchCoin, fetchCoinList, fetchCoinPriceHistory } from '../actions';

// http://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=f24ae8d7f797c65bf93a9e2b9d3548bd
// weather api 참조

// https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=KRW&limit=60&aggregate=3&e=BITHUMB
// 차트그릴때 1시간 api
const ReactGridLayout = WidthProvider(RGL);

class CoinList extends Component {
  componentDidMount() {
    this.props.fetchCoinList();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? 'red' : 'green';
  }

  generateLayout(num) {
    return {
      x: (num * 3) % 12,
      y: Math.floor(num / 4),
      w: 3,
      h: 2,
      isResizable: false,
    };
  }

  render() {
    const arr_coin = ['BTC','ETH','XRP','BCH','EOS','QTUM','DASH','BTG','ZEC','XMR','LTC','ETC','ICX'];
    var coin_list = this.props.coin_list;
    var num = 0;
    if (!coin_list || coin_list.length == 0) {
      return <Loader type = 'pacman'/>; //안됨 다른 걸로 바꾸기
    }
    return (
      <ReactGridLayout>
        { _.map(arr_coin, (symbol) => {
          return (
            <div key = {symbol} data-grid = {this.generateLayout(num++)}>
              <Card key = {symbol} coin = {symbol}/>
            </div>
          );
        })
        }
      </ReactGridLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    coin_list: state.coin_list.data,
    coin_price_list: state.coin_price_list,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin, fetchCoinList, fetchCoinPriceHistory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);