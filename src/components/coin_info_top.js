import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';

import { fetchCoin } from '../actions';

class CoinInfoTop extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoin(this.props.coin);
    }, 2000);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? 'red' : 'green';
  }

  render() {
    const coin_price = this.props.coins[this.props.coin].KRW;
    const color = this.getColor(coin_price.CHANGEPCT24HOUR);
    return (
      <div>
        <MetaTags>
          <title>{this.numberWithCommas(this.props.coins[this.props.coin].KRW.PRICE)} {this.props.coin}</title>
        </MetaTags>
        <table className = 'table table-borderless table-light rounded-top shadow-sm text-left mb-0' key = {this.props.coin}>
          <thead>
            <tr>
              <td className = 'coin-title font-weight-bold' colSpan = '4'>{this.props.coin}</td>
            </tr>
          </thead>
          <tbody className = 'coin-info-tbody'>
            <tr>
              <td className = 'pb-0 pt-0' key = {coin_price.PRICE} colSpan = '2' style={{color: `${color}`}}><span className = 'coin-info-price font-weight-bold'>{this.numberWithCommas(coin_price.PRICE)}</span><span className = 'word-sm ml-1'>KRW</span></td>
              <td className = 'pb-0 pt-0'><span className = 'word-sm'>고가</span><span className = 'm-3' style={{color: 'red'}}>{this.numberWithCommas(coin_price.HIGH24HOUR)}</span></td>
              <td className = 'pb-0 pt-0'><span className = 'word-sm mr-3'>거래량(24H)</span>{Number(coin_price.VOLUME24HOUR).toFixed(4)}<span className = 'word-sm ml-1'>{this.props.coin}</span></td>
            </tr>
            <tr>
              <td className = 'pt-0 pb-1' colSpan = '2'><span className = 'word-sm'>전일대비</span> <span style={{color: `${color}`}}>{Number(coin_price.CHANGEPCT24HOUR).toFixed(2)} %  <span className = 'ml-3'>{this.numberWithCommas(coin_price.CHANGE24HOUR)}</span></span></td>
              <td className = 'pt-0'><span className = 'word-sm'>저가</span> <span className = 'm-3' style={{color: 'green'}}>{this.numberWithCommas(coin_price.LOW24HOUR)}</span></td>
              <td className = 'pt-0'><span className = 'word-sm mr-3'>거래대금(24H)</span>{this.numberWithCommas(Number(coin_price.VOLUME24HOURTO).toFixed(0))} <span className = 'word-sm'>KRW</span></td>
            </tr>
          </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfoTop);