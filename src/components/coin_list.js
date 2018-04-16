import React, { Component } from 'react';
import {connect} from 'react-redux';
import GridLayout from 'react-grid-layout';
import {
  Sparklines,
  SparklinesLine
} from 'react-sparklines';
import {fetchCoin} from '../actions';
import { bindActionCreators } from 'redux';


class CoinList extends Component {
  componentDidMount() {
    {this.props.fetchCoin();}
  }

  renderCoin(coins) {
    console.log(coins);
    console.log(coins.DISPLAY);
    return <div>{coins.BTC.KRW.MARKET} </div>;
    // if(!coins) {
    //   return <div>없음</div>;
    // }
    // console.log(this.props.coins);
    // return coins.map(coin => (
    //   // <div className="card" key={coin.rank}>
    //   //   <div className="card-body">
    //   //     <p className="card-title">{coin.name}</p>
    //   //     {/* <Sparklines height={50} width={80} data={}>
    //   //       <SparklinesLine color={}/>
    //   //     </Sparklines> */}
    //   //   </div>
    //   // </div>
    //   <div>{coin.KRW.MARKET}</div>
    // ));
  }

  render() {
    return (
      <div>
        {/* {this.props.coins[0].id} */}
        {this.renderCoin(this.props.coins)}
      </div>
      // <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
      //   <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>{this.props.coins[0].name}</div>
      //   <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>{this.props.coins[1].name}</div>
      //   <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
      // </GridLayout>
    );
  }
}

function mapStateToProps({coins}) {
  return {
    coins: coins.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCoin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);