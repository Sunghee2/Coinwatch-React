import {combineReducers} from 'redux';
import coins from './coin_reducer';
import selected_coin from './selected_coin_reducer';

const rootReducer = combineReducers({
  coins,
  selected: selected_coin
});

export default rootReducer;