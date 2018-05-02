import {combineReducers} from 'redux';
import coins from './coin_reducer';
import selected_coin from './selected_coin_reducer';
import coin_list from './coin_list_reducer';
import coin_details from './coin_details_reducer';
import coin_price_history from './coin_price_history_reducer';
import coin_order_book from './coin_order_book_reducer';
import coin_transaction from './coin_transaction_reducer';

const rootReducer = combineReducers({
  coins,
  coin_list,
  coin_details,
  coin_price_history,
  coin_order_book,
  coin_transaction,
  selected: selected_coin
});

export default rootReducer;