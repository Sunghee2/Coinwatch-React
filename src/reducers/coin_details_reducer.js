import {FETCH_COIN_DETAILS} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_DETAILS}_PENDING`:
    return {
      loading: true,
      error: '',
      data: ''
    };
  case `${FETCH_COIN_DETAILS}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: action.payload.data.Data
    };
  case `${FETCH_COIN_DETAILS}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: 'error'
    };
  default:
    return state;
  }
}