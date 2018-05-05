import {FETCH_COIN_LIST} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_LIST}_FULFILLED`: {
    return {
      loading: false,
      error: '',
      data: action.payload.data.Data
    };
  }
  default:
    return state;
  }
}