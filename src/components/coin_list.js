/* global _ */
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

  // renderCard(num, coin) {
  //   console.log(coin.FROMSYMBOL);
  //   return <div key="0" data-grid={{x: 0, y: 0, w: 1, h: 2}}>asdf</div>;
  // <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>{this.props.coins[1].name}</div>
  // <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>

  // var order = coins`.${coin}.KRW.MARKET`;
  // console.log(order);
  // for(var i in coins) {
  //   console.log(i);
  //   console.log(coins[i].KRW)
  // }
  // console.log(coin.length);
  // return <div>{order}</div>;
  // return (
  //   <div className="card" key={coins.coin.KRW.MARKET}>
  //   <
  // )
  // }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderCoin(coins) {
    // var num = 0;
    // for(var i in coins) {
    //   this.renderCard(num, coins[i].KRW);
    //   // console.log(i);
    //   // return <div key="sdaf">asdfadsi</div>;
    //   // this.renderCard(num, coins[i].KRW);
    //   // num++;
    // }
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
    // return coins.map(coin => (
    //   <div className="card" key={coin.KRW.FROMSYMBOL}>
    //     <div className="card-body">
    //       <p className="card-title">{coin.KRW.FROMSYMBOL}</p>
    //       {/* <Sparklines height={50} width={80} data={}>
    //         <SparklinesLine color={}/>
    //       </Sparklines> */}
    //     </div>
    //   </div>
    // ));
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
        {/* for(var i = 0; i < ; i++) {
           <div>adsf</div>
        } */}
        {/* <div key="a">{a}</div>
        <div key="b">{b}</div>
        <div key="c">c</div> */}
        {this.renderCoin(this.props.coins)}
        {/* {this.renderCoin(this.props.coins)} */}
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