import React, { Component } from 'react';
import { bindActionCreators } from 'redux';                               
import { connect } from 'react-redux';

import { fetchCoinTransaction } from '../actions';

class Contracts extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fetchCoinTransaction(this.props.coin);
    }, 3000);
  }

  getColor(type) {
    return type === 'bid'? 'red' : 'green';
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderTransaction(transactions) {
    return transactions.map((t) => {
      var dt = new Date(t.transaction_date);
      const color = this.getColor(t.type);
      return (
        <tr key = {t.cont_no}>
          <td>{dt.getMonth() + 1}.{dt.getDate()}<span className = 'ml-1 text-secondary font-weight-light'>{dt.getHours()}:{dt.getMinutes()}</span></td>
          <td className = 'font-weight-bold text-danger'>{this.numberWithCommas(t.price)}</td>
          <td style = {{color: `${color}`}}>{t.units_traded}</td>
          <td>{this.numberWithCommas(t.total)}</td>
        </tr>
      );
    });
  }

  render() {
    const coins = this.props.coins;
    const sym = this.props.coin;
    if (!coins || coins.length === 0 || !coins[sym].transaction || coins[sym].transaction.length === 0) {
      return <div>Loding..</div>;
    }
    const transactions = coins[sym].transaction.data;
    return (
      <div className = 'table-responsive rounded shadow-sm mt-3'>
        <table className = 'table'>
          <thead className = 'table-active'>
            <tr>
              <th scope = 'col'>체결시각</th>
              <th scope = 'col'>체결가격</th>
              <th scope = 'col'>체결량</th>
              <th scope = 'col'>체결금액</th>
            </tr>
          </thead>
          <tbody className = 'table-light'>
            {this.renderTransaction(transactions)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins : state.coins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinTransaction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);

