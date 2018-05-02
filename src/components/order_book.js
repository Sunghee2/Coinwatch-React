import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCoinOrderBook } from '../actions';

class OrderBook extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoinOrderBook(this.props.coin);
    }, 2000);
    // this.props.fetchCoinOrderBook(this.props.coin);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderAsks(asks) {
    var rows = [];
    var sum = 0;
    for (var i of asks) {
      sum += Number(i.price);
    }

    for (var j = 5; j > 0; j--) {
      var width = (asks[j].quantity/sum)*100 > 100 ? '100%':(asks[j].quantity/sum)*100 + '%'; 
      var marginLeft = width=='100%'? '0':100-((asks[j].quantity/sum)*100) + "%";
      // console.log(width);
      rows.push (
        <tr className = 'h-100' key = {asks[j].price}>
          <td className = 'td-quantity h-100 p-0 position-relative'>
            <div className = 'per-bar bg-success position-absolute' style = {{width: `${width}`, marginLeft: `${marginLeft}`}}/>
            <p className = 'quantity word-sm position-absolute pl-5 pt-3'>{Number(asks[j].quantity).toFixed(4)}</p>
          </td>
          <td className = 'td-price table-success text-success'>
            {this.numberWithCommas(asks[j].price)}
          </td>
          <td>
          </td>
        </tr>
      );
    }
    return rows;
  }

  renderBids(bids) {
    var rows = [];
    var sum = 0;
    for (var i of bids) {
      sum += Number(i.price);
    }
    for(var j = 0; j < 5; j++) {
      var width = (bids[j].quantity/sum)*100 > 100? '100%':(bids[j].quantity/sum)*100 + '%';
      rows.push (
        <tr className = 'h-100' key = {bids[j].price}>
          <td></td>
          <td className = 'td-price table-danger text-danger'>
            {this.numberWithCommas(bids[j].price)}
          </td>
          <td className = 'td-quantity h-100 p-0 position-relative'>
            <div className = 'per-bar bg-danger position-absolute' style = {{width: `${width}`}} />
            <p className = 'quantity word-sm position-absolute pt-3 pl-5'>{Number(bids[j].quantity).toFixed(4)}</p>
          </td>
        </tr>
      );
    }
    return rows;
  }

  render() {
    const coin = this.props.coin;
    const order_book = this.props.coin_order_book[coin];
    if (!order_book || order_book.length == 0) {
      return <div>Loding..</div>;
    }
    return (
      <div className = 'box_orderbook bg-white rounded shadow-sm'>
        <table className = 'orderbook table h-100'>
          <thead className = 'table-active'>
            <tr>
              <th className = 'text-left' colSpan = '3'>일반호가</th>
            </tr>
          </thead>
          <tbody className = 'h-100'>
            {this.renderAsks(order_book['data'].asks)}
            {this.renderBids(order_book['data'].bids)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coin_order_book: state.coin_order_book.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinOrderBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);