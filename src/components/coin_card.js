import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Chart from './chart_in_coin_home';
import { fetchCoin, fetchCoinPriceHistory } from '../actions';

const ImgUrl = 'https://www.cryptocompare.com';

class CoinCard extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoin(this.props.coin);
      this.props.fetchCoinPriceHistory(this.props.coin);
    }, 3000);
    // this.props.fetchCoin(this.props.coin);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? 'red' : 'green';
  }

  render(){
    const sym = this.props.coin;
    const coins = this.props.coins[sym];

    
    if (!coins || coins.length == 0 || !coins.KRW || !coins.price_history) {
      return <div/>; //안됨 다른 걸로 바꾸기
    }
    console.log(coins);
    
    const coin_list = this.props.coin_list[sym];
    
    var imgUrl = ImgUrl + coin_list.ImageUrl;
    return (
      <div className = 'card' key = {sym}>
        <div className = 'card-body'>
          <div className = 'text-center'>
            <Link to = {{ pathname: `/${sym}`, state: { id: `${coin_list.Id}` }}}>
              <img className = 'coin_list_img' src = {imgUrl}/>
              <h5 className = 'coin-name'>{coin_list.CoinName}</h5>
            </Link>
          </div>
          <p className = 'coin-price font-weight-bold' key = {coins.KRW.PRICE}>₩ {this.numberWithCommas(coins.KRW.PRICE)} <span className = 'change24H ml-1 font-weight-bold' style = {{color: `${this.getColor(coins.KRW.CHANGEPCT24HOUR)}`}}>{Number(coins.KRW.CHANGEPCT24HOUR).toFixed(2)} %</span></p>
          <div key = {coins.price_history[0].time} className = 'mx-auto'>
            <Chart key = {coins.price_history[0].time} data = {coins.price_history.map(e => (e.close))}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.coins);
  return {
    coins: state.coins,
    coin_list: state.coin_list.data,
    coin_price_list: state.coin_price_list,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin, fetchCoinPriceHistory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);