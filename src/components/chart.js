import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const Chart = ({coin}) => {
  const symbol = `BITHUMB:${coin}KRW`;
  return (
    <div>
      <TradingViewWidget 
        symbol={symbol}
        locale="kr" 
        allow_symbol_change={false}
        show_popup_button={false}/>
    </div>
  );
};

export default Chart;