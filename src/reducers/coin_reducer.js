import {FETCH_COIN} from '../actions';

export default function(state={
  loading: false, error: '', data: []
}, action) {
  // console.log(action);
  switch (action.type) {
  case `${FETCH_COIN}_PENDING`:
    return {
      loading: true,
      error: '',
      data: {...state.data}
    };
  case `${FETCH_COIN}_FULFILLED`:
  // console.log("reducer", action.meta);
    return {
      loading: false,
      error: '',
      data: {...state.data, [action.meta]: action.payload.data.RAW[action.meta]}
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