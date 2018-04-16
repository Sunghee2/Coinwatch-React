import {combineReducers} from 'redux';
import coins from './coin_reducer';

const rootReducer = combineReducers({
  coins
});

export default rootReducer;