import {FETCH_COIN_LIST} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN_LIST}_FULFILLED`: {
    const coin = {
      ...state.data[action.meta],
      list: action.payload.data.Data[action.meta]
    };
    console.log(coin);
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