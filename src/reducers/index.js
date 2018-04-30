import {combineReducers} from 'redux';
import coins from './coin_reducer';
import selected_coin from './selected_coin_reducer';
import coin_list from './coin_list_reducer';
import coin_details from './coin_details_reducer';
import coin_price_history from './coin_price_history_reducer';

const rootReducer = combineReducers({
  coins,
  coin_list,
  coin_details,
  coin_price_history,
  selected: selected_coin
});

export default rootReducer;