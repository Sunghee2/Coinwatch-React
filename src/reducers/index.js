import { combineReducers } from 'redux';
import coins from './coin_reducer';
import coin_list from './coin_list_reducer';

const rootReducer = combineReducers({
  coins,
  coin_list,
});

export default rootReducer;