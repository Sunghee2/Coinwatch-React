import React from 'react';
import {
  Sparklines,
  SparklinesLine
} from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <Sparklines height = {120} width={180} data={props.data}>
        <SparklinesLine color = '#1c8cdc'/>
      </Sparklines>
    </div>
  );
};

export default Chart;