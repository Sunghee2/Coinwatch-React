import React, { Component } from 'react';
import { connect } from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchCoin, fetchCoinDetails } from '../actions';
import { bindActionCreators } from 'redux';

import Header from '../components/header_show';
import Chart from '../components/chart';
import CoinInfoTabs from '../components/coin_info_tabs';

// https://www.cryptocompare.com/api/data/coinlist/ 여기서 아이디 얻기
// https://www.cryptocompare.com/api/data/coinsnapshotfullbyid?id=1182

class CoinShow extends Component {
  render(){
    const coin = this.props.match.params.coin;
    const id = this.props.location.state.id;
    return (
      <div className = 'CoinShow'>
        <div>
          <Header/>
        </div>
        <div className = 'row'>
          <div className = 'col-8'>
            <div>
              <Chart coin = {coin}/>
            </div>
            <div>
              <CoinInfoTabs id = {id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinShow);