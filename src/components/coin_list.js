import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import Loader from 'react-loaders';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from './chart_in_coin_home';
import { fetchCoin, fetchCoinList, fetchCoinPriceHistory } from '../actions';

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
    // this.props.fetchCoin(this.props.selected);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getColor(num) {
    return num > 0 ? 'red' : 'green';
  }
 
  // renderCoin(coins, coin_list) {
  //   var rows = [];
  //   var num = 0;
  //   for (var i in coins) {
  //     this.props.fetchCoinPriceHistory(i);
  //     var layout = this.generateLayout(num);
  //     var imgUrl = ImgUrl + coin_list[i].ImageUrl;
  //     var change24H = ((coins[i].KRW.PRICE - coins[i].KRW.OPEN24HOUR)/coins[i].KRW.OPEN24HOUR * 100).toFixed(2);
  //     rows.push(
  //       <div className = 'card' key = {coin_list[i].Id} data-grid = {layout}>
  //         <div className = 'card-body'>
  //           <div className = 'text-center'>
  //             <Link to = {{ pathname: `/${i}`, state: { id: `${coin_list[i].Id}` }}}>
  //               <img className = 'coin_list_img' src = {imgUrl}/>
  //               <h5 className = 'coin-name'>{coin_list[i].CoinName}</h5>
  //             </Link>
  //           </div>
  //           <p className = 'coin-price' key = {coins[i].KRW.PRICE}>₩ {this.numberWithCommas(coins[i].KRW.PRICE)}</p>
  //           <p className = 'change24H' style={{color: `${this.getColor(change24H)}`}}>{change24H} %</p>
  //           {/* <Chart data={} */}
  //             {/* style={this.getColor({change24H})}>{change24H}</p> */}
  //         </div>
  //       </div>
  //     );
  //     num++;
  //   }
  //   return rows;
  // }


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
    var num = 0;
    if (!coins || coins.length == 0 || !coin_list || coin_list.length == 0) {
      return <Loader type = 'pacman'/>; //안됨 다른 걸로 바꾸기
    }
    return (
      <ReactGridLayout>
        { _.map(this.props.coins, (v, k) => {
          console.log(coin_list);
          console.log(coins);
          console.log(num);
          var layout = this.generateLayout(num++);
          var imgUrl = ImgUrl + coin_list[k].ImageUrl;
          var change24H = ((coins[k].KRW.PRICE - coins[k].KRW.OPEN24HOUR)/coins[k].KRW.OPEN24HOUR * 100).toFixed(2);
          return (
            <div className = 'card' key = {coin_list[k].Id} data-grid = {layout}>
              <div className = 'card-body'>
                <div className = 'text-center'>
                  <Link to = {{ pathname: `/${k}`, state: { id: `${coin_list[k].Id}` }}}>
                    <img className = 'coin_list_img' src = {imgUrl}/>
                    <h5 className = 'coin-name'>{coin_list[k].CoinName}</h5>
                  </Link>
                </div>
                <p className = 'coin-price' key = {coins[k].KRW.PRICE}>₩ {this.numberWithCommas(coins[k].KRW.PRICE)}</p>
                <p className = 'change24H' style={{color: `${this.getColor(change24H)}`}}>{change24H} %</p>
                {/* <Chart data={} */}
                {/* style={this.getColor({change24H})}>{change24H}</p> */}
              </div>
            </div>
          );
        })
        }
      </ReactGridLayout>
    );

    // <div className = 'card' key = {coin_list[i].Id} data-grid = {layout}>
    //       <div className = 'card-body'>
    //         <div className = 'text-center'>
    //           <Link to = {{ pathname: `/${i}`, state: { id: `${coin_list[i].Id}` }}}>
    //             <img className = 'coin_list_img' src = {imgUrl}/>
    //             <h5 className = 'coin-name'>{coin_list[i].CoinName}</h5>
    //           </Link>
    //         </div>
    //         <p className = 'coin-price' key = {coins[i].KRW.PRICE}>₩ {this.numberWithCommas(coins[i].KRW.PRICE)}</p>
    //         <p className = 'change24H' style={{color: `${this.getColor(change24H)}`}}>{change24H} %</p>
    //         {/* <Chart data={} */}
    //           {/* style={this.getColor({change24H})}>{change24H}</p> */}
    //       </div>
    //     </div>
      // <ReactGridLayout>
      //   {this.renderCoin(this.props.coins, this.props.coin_list)}
      // </ReactGridLayout>
    // );
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
  return bindActionCreators({ fetchCoin, fetchCoinList, fetchCoinPriceHistory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);