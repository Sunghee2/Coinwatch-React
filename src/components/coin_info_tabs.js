import React, { Component } from 'react';
import { fetchCoinDetails } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CoinInfoTabs extends Component {
  componentDidMount() {
    this.props.fetchCoinDetails(this.props.id);
  }

  render() {
    const coin_details = this.props.coin_details;
    if(!coin_details || coin_details.length === 0) {
      return <div>Loding..</div>;
    }
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
    coin_details: state.coin_details.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCoinDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinInfoTabs);