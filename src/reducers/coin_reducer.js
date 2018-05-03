import {FETCH_COIN, FETCH_COIN_PRICE_HISTORY} from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  // console.log(action);
  switch (action.type) {
  case `${FETCH_COIN}_FULFILLED`: {
    const coin = {...state[action.meta], KRW: action.payload.data.RAW[action.meta].KRW};
    return {...state, [action.meta]: coin};
  }
  case `${FETCH_COIN_PRICE_HISTORY}_FULFILLED`: {
    const coin = {...state[action.meta], price_history: action.payload.data.Data};
    return {...state, [action.meta]: coin};
  }
  default:
    return state;
  }
}