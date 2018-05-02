import {FETCH_COIN_ORDER_BOOK} from '../actions';

export default function(state={
  loading: false, error: '', data: {}
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_ORDER_BOOK}_PENDING`:
    return {
      loading: true,
      error: '',
      data: state.data
    };
  case `${FETCH_COIN_ORDER_BOOK}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: { [action.payload.data.data.order_currency]: action.payload.data, ...state.data }
    };
  case `${FETCH_COIN_ORDER_BOOK}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: 'error'
    };
  default:
    return state;
  }
}