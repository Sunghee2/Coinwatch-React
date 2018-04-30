import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function avg(data) {
  return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines height = {120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
      <div>{avg(props.data)}{props.unit}</div>
    </div>
  );
};

export default Chart;