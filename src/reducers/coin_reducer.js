import {FETCH_COIN} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN}_PENDING`:
    return {
      loading: true,
      error: '',
      data: state.data
    };
  case `${FETCH_COIN}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: action.payload.data.RAW
    };
  case `${FETCH_COIN}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: 'error'
    };
  default:
    return state;
  }
}