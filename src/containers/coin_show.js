import React, { Component } from 'react';
import {connect} from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';
import {
  Sparklines,
  SparklinesLine
} from 'react-sparklines';
import {fetchCoin} from '../actions';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';

// https://www.cryptocompare.com/api/data/coinlist/ 여기서 아이디 얻기
// https://www.cryptocompare.com/api/data/coinsnapshotfullbyid?id=1182

class CoinShow extends Component {
  render(){
    return(
      <div>
        <Chart coin="BTC"/>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a 
              className="nav-link active" 
              id="home-tab" 
              data-toggle="tab" 
              href="#home" 
              role="tab" 
              aria-controls="home" 
              aria-selected="true">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              id="features-tab" 
              data-toggle="tab" 
              href="#features" 
              role="tab" 
              aria-controls="features" 
              aria-selected="false">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              id="technology-tab" 
              data-toggle="tab" 
              href="#technology" 
              role="tab" 
              aria-controls="technology" 
              aria-selected="false">
              Technology
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div 
            className="tab-pane fade show active" 
            id="home" 
            role="tabpanel" 
            aria-labelledby="home-tab">
            테스트 중입니다~!
          </div>
          <div 
            className="tab-pane fade" 
            id="features" 
            role="tabpanel" 
            aria-labelledby="features-tab">
            여긴 특징!
          </div>
          <div 
            className="tab-pane fade" 
            id="technology" 
            role="tabpanel" 
            aria-labelledby="technology-tab">
            여긴 기술!
          </div>
        </div>
      </div>
    );
  }
}

export default CoinShow;