import {FETCH_COIN_TRANSACTION} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_TRANSACTION}_PENDING`:
    return {
      loading: true,
      error: '',
      data: state.data
    };
  case `${FETCH_COIN_TRANSACTION}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: action.payload.data
    };
  case `${FETCH_COIN_TRANSACTION}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: 'error'
    };
  default:
    return state;
  }
}