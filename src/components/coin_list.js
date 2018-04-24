import React, { Component } from 'react';
import {connect} from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';
import {
  Sparklines,
  SparklinesLine
} from 'react-sparklines';
import {fetchCoin, fetchCoinList} from '../actions';
import { bindActionCreators } from 'redux';

// http://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=f24ae8d7f797c65bf93a9e2b9d3548bd
// weather api 참조

// https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=KRW&limit=60&aggregate=3&e=BITHUMB
// 차트그릴때 1시간 api
const ReactGridLayout = WidthProvider(RGL);
const ImgUrl = 'https://www.cryptocompare.com';

class CoinList extends Component {
  componentWillMount() {
    this.props.fetchCoinList();
    setInterval(() => {
      this.props.fetchCoin(this.props.selected);
    }, 2000);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? "color:green;" : "color:red;";
  }
 
  renderCoin(coins, coin_list) {
    console.log(this.props.coin_list);
    var rows=[];
    var num = 0;
    for (var i in coins) {
      var layout = this.generateLayout(num);
      var imgUrl = ImgUrl + coin_list[i].ImageUrl;
      console.log(imgUrl);
      var change24H = ((coins[i].KRW.PRICE - coins[i].KRW.OPEN24HOUR)/coins[i].KRW.OPEN24HOUR * 100).toFixed(2) + "%";
      rows.push(
        <div className="card" key={coin_list[i].Id} data-grid={layout}>
          <div className="card-body">
            <div className="text-center">
              <img className="coin_list_img" src={imgUrl}/>
              <h5 className="coin-name">{coin_list[i].CoinName}</h5>
            </div>
            <p className="coin-price" key={coins[i].KRW.PRICE}>₩ {this.numberWithCommas(coins[i].KRW.PRICE)}</p>
            <p className="change24H">{change24H}</p>
              {/* style={this.getColor({change24H})}>{change24H}</p> */}
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
    var coin_list = this.props.coin_list;
    if (!coins || coins.length == 0 || !coin_list || coin_list.length == 0) {
      return <div>Loading...</div>;
    }
    return (
      <ReactGridLayout>
        {this.renderCoin(this.props.coins, this.props.coin_list)}
      </ReactGridLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins.data,
    coin_list: state.coin_list.data,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCoin, fetchCoinList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);