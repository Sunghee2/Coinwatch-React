import {FETCH_COIN} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  switch (action.type) {
  case `${FETCH_COIN}_PENDING`:
    return {
      loading: true,
      error: '',
      data: {...state.data}
    };
  case `${FETCH_COIN}_FULFILLED`:
  // console.log("reducer", action.payload.data.RAW['EOS'].KRW.VOLUME24HOUR);
    return {
      loading: false,
      error: '',
      data: {...state.data, coins: action.payload.data.RAW}
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