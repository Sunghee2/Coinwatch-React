import React, { Component } from 'react';
import {connect} from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';
import {
  Sparklines,
  SparklinesLine
} from 'react-sparklines';
import {fetchCoin} from '../actions';
import { bindActionCreators } from 'redux';

const ReactGridLayout = WidthProvider(RGL);

class CoinList extends Component {
  componentWillMount() {
    setInterval(() => {
      this.props.fetchCoin(this.props.selected);
    }, 2000);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderCoin(coins) {
    var rows=[];
    var num = 0;
    for (var i in coins) {
      var layout = this.generateLayout(num);
      var change24H = ((coins[i].KRW.PRICE - coins[i].KRW.OPEN24HOUR)/coins[i].KRW.OPEN24HOUR * 100).toFixed(2) + "%";
      rows.push(
        <div className="card" key={i} data-grid={layout}>
          <div className="card-body">
            <p className="coin-name">{i}</p>
            <p className="coin-price" key={coins[i].KRW.PRICE}>₩ {this.numberWithCommas(coins[i].KRW.PRICE)}</p>
            <p className="change24H">{change24H}</p>
          </div>
        </div>
      );
      num++;
    }
    return rows;
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
    var coins = this.props.coins;
    if (!coins || coins.length == 0) {
      return <div>Loading...</div>;
    }
    return (
      <ReactGridLayout>
        {this.renderCoin(this.props.coins)}
      </ReactGridLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins.data,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCoin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);