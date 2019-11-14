import { combineReducers } from 'redux';
import coins from './detail';
import coin_list from './list';

const rootReducer = combineReducers({
  coins,
  coin_list,
});

export default rootReducer;