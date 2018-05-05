import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import MDSpinner from 'react-md-spinner';

import { fetchCoinOrderBook } from '../actions';

class OrderBook extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoinOrderBook(this.props.coin);
    }, 2000);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  sumQuantity(asks, bids) {
    var sum = 0;
    for(var i of asks) {
      sum += Number(i.quantity);
    }
    for(var j of bids) {
      sum += Number(j.quantity);
    }
    return sum;
  }

  renderAsks(asks, sum, timestamp) {
    return _.orderBy(asks, 'price', 'desc').map((v) => {
      const width = (v.quantity/sum)*100 > 100 ? '100%':(v.quantity/sum)*100 + '%'; 
      const marginLeft = width==='100%'? '0':100-((v.quantity/sum)*100) + "%";
      const key = timestamp + v.price;
      return (
        <tr key = {key} className = 'h-100'>
          <td className = 'td-quantity h-100 p-0 position-relative'>
            <div className = 'per-bar bg-success position-absolute' style = {{width: `${width}`, marginLeft: `${marginLeft}`}}/>
            <p className = 'quantity word-sm position-absolute pl-5 pt-3'>{Number(v.quantity).toFixed(4)}</p>
          </td>
          <td className = 'td-price table-success text-success'>
            {this.numberWithCommas(v.price)}
          </td>
          <td></td>
        </tr>
      );
    });
  }

  renderBids(bids, sum, timestamp) {
    return bids.map((v) => {
      var width = (v.quantity/sum)*100 > 100? '100%':(v.quantity/sum)*100 + '%';
      const key = timestamp + v.price;
      return (
        <tr key = {key} className = 'h-100'>
          <td></td>
          <td className = 'td-price table-danger text-danger'>
            {this.numberWithCommas(v.price)}
          </td>
          <td className = 'td-quantity h-100 p-0 position-relative'>
            <div className = 'per-bar bg-danger position-absolute' style = {{width: `${width}`}} />
            <p className = 'quantity word-sm position-absolute pt-3 pl-5'>{Number(v.quantity).toFixed(4)}</p>
          </td>
        </tr>
      );
    });
  }

  render() {
    const sym = this.props.coin;
    const coins = this.props.coins;
    if (!coins || coins.length === 0 || !coins[sym].order_book || coins[sym].order_book.length === 0) {
      return (
        <MDSpinner className = 'mb-5' size = {30} />
      );
    }
    const order_book = coins[sym].order_book;
    const asks = _.slice(order_book.asks, 0, 5);
    const bids = _.slice(order_book.bids, 0, 5);
    const sum = this.sumQuantity(asks, bids);

    return (
      <div className = 'box_orderbook bg-white rounded shadow-sm'>
        <table className = 'orderbook table h-100'>
          <thead className = 'table-active'>
            <tr>
              <th className = 'text-left' colSpan = '3'>일반호가</th>
            </tr>
          </thead>
          <tbody className = 'h-100'>
            {this.renderAsks(asks, sum, order_book.timestamp)}
            {this.renderBids(bids, sum, order_book.timestamp)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinOrderBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);