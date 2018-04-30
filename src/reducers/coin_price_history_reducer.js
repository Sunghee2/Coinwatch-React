import {FETCH_COIN_PRICE_HISTORY} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_PRICE_HISTORY}_PENDING`:
    return {
      loading: true,
      error: '',
      data: ''
    };
  case `${FETCH_COIN_PRICE_HISTORY}_FULFILLED`:
    console.log('dsfa');
    return {
      loading: false,
      error: '',
      data: action.payload.data.Data
    };
  case `${FETCH_COIN_PRICE_HISTORY}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: 'error'
    };
  default:
    return state;
  }
}