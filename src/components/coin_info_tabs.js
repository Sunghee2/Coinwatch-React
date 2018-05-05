import React, { Component } from 'react';
import { fetchCoinDetails } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MDSpinner from 'react-md-spinner';

class CoinInfoTabs extends Component {
  componentDidMount() {
    this.props.fetchCoinDetails(this.props.id, this.props.coin);
  }

  render() {
    const coins = this.props.coins;
    const sym = this.props.coin;
    if(!coins || coins.length === 0 || !coins[sym].details || coins[sym].details.length === 0) {
      return <MDSpinner className = 'mt-3' size = {40}/>;
    }
    const coin_details = coins[sym].details;
    return (
      <div className = 'shadow-sm'>
        <ul className = 'nav nav-tabs' role = 'tablist'>
          <li className = 'nav-item'>
            <a 
              className = 'nav-link active' 
              data-toggle = 'tab' 
              href = '#home' >
              {coin_details.General.Symbol}
            </a>
          </li>
          <li className = 'nav-item'>
            <a 
              className = 'nav-link'
              data-toggle = 'tab' 
              href = '#features'>
              Features
            </a>
          </li>
          <li className = 'nav-item'>
            <a 
              className = 'nav-link' 
              data-toggle = 'tab'
              href = '#technology'>
              Technology
            </a>
          </li>
        </ul>
        <div className = 'tab-content' id = 'myTabContent'>
          <div 
            className = 'tab-pane fade show active' 
            id = 'home' 
            role = 'tabpanel'>
            <div className = 'text-left ml-3 pt-3 mr-3' dangerouslySetInnerHTML={{ __html: coin_details.General.Description }}/>
          </div>
          <div 
            className = 'tab-pane fade' 
            id = 'features' 
            role = 'tabpanel'>
            <div className = 'text-left ml-3 pt-3 mr-3' dangerouslySetInnerHTML={{ __html: coin_details.General.Features }}/>
          </div>
          <div 
            className = 'tab-pane fade' 
            id = 'technology'
            role = 'tabpanel'>
            <div className = 'text-left ml-3 pt-3 mr-3' dangerouslySetInnerHTML={{ __html: coin_details.General.Technology }}/>
          </div>
        </div>
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
  return bindActionCreators({fetchCoinDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfoTabs);