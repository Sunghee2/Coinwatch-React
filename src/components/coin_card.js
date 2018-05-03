import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Chart from './chart_in_coin_home';
import { fetchCoin, fetchCoinPriceHistory } from '../actions';

const ImgUrl = 'https://www.cryptocompare.com';
const arr_coin = ['BTC','ETH','XRP','BCH','EOS','QTUM','DASH','BTG'];

class CoinCard extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoin(this.props.coin);
    }, 3000);
    // this.props.fetchCoin(this.props.coin);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? 'red' : 'green';
  }

  generateLayout(coin_name) {
    const num = arr_coin.indexOf(coin_name);
    return {
      x: (num * 3) % 12,
      y: Math.floor(num / 4),
      w: 3,
      h: 2,
      isResizable: false,
    };
  }

  render(){
    const coin = this.props.coin;

    if (!this.props.coins[coin] || this.props.coins[coin].length == 0) {
      return <div/>; //안됨 다른 걸로 바꾸기
    }

    const coin_price = this.props.coins[coin];
    const coin_list = this.props.coin_list[coin];
    
    var layout = this.generateLayout(coin);
    var imgUrl = ImgUrl + coin_list.ImageUrl;
    var change24H = ((coin_price.KRW.PRICE - coin_price.KRW.OPEN24HOUR)/coin_price.KRW.OPEN24HOUR * 100).toFixed(2);
    return (
      <div className = 'card' key = {coin}>
        <div className = 'card-body'>
          <div className = 'text-center'>
            <Link to = {{ pathname: `/${coin}`, state: { id: `${coin_list.Id}` }}}>
              <img className = 'coin_list_img' src = {imgUrl}/>
              <h5 className = 'coin-name'>{coin_list.CoinName}</h5>
            </Link>
          </div>
          <p className = 'coin-price' key = {coin_price.KRW.PRICE}>₩ {this.numberWithCommas(coin_price.KRW.PRICE)}</p>
          <p className = 'change24H' style={{color: `${this.getColor(change24H)}`}}>{change24H} %</p>
          {/* <Chart data={} */}
          {/* style={this.getColor({change24H})}>{change24H}</p> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins.data,
    coin_list: state.coin_list.data,
    coin_price_list: state.coin_price_list,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin, fetchCoinPriceHistory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);