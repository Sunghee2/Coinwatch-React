import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MDSpinner from 'react-md-spinner';

import Chart from './HomeChart';
import { fetchCoin, fetchCoinPriceHistory, fetchCoinTransaction } from '../actions';

const ImgUrl = 'https://www.cryptocompare.com';

class CoinCard extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoin(this.props.coin);
      this.props.fetchCoinPriceHistory(this.props.coin);
      this.props.fetchCoinTransaction(this.props.coin);
    }, 4000);
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
    
    if (!coins || coins.length === 0 || !coins.transaction || !coins.price_history) {
      return <MDSpinner size = {30}/>;
    }
    
    const coin_list = this.props.coin_list[sym];
    
    var imgUrl = ImgUrl + coin_list.ImageUrl;
    return (
      <div className = 'card' key = {sym}>
        <div className = 'card-body'>
          <div className = 'text-center'>
            <Link to = {{ pathname: `/${sym}`, state: { id: `${coin_list.Id}` }}}>
              <img className = 'coin_list_img' src = {imgUrl} alt = ''/>
              <h5 className = 'coin-name'>{coin_list.CoinName}</h5>
            </Link>
          </div>
          <p className = 'coin-price font-weight-bold' key = {coins.KRW.data.closing_price}>₩ {this.numberWithCommas(coins.KRW.data.closing_price)} <span className = 'change24H ml-1 font-weight-bold' style = {{color: `${this.getColor(coins.KRW.data['24H_fluctate_rate'])}`}}>{Number(coins.KRW.data['24H_fluctate_rate']).toFixed(2)} %</span></p>
          <div key = {coins.price_history[0].time} className = 'mx-auto'>
            <Chart key = {coins.price_history[0].time} data = {coins.price_history.map(e => (e.close))}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins,
    coin_list: state.coin_list.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin, fetchCoinPriceHistory, fetchCoinTransaction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);