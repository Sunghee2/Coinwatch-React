import {
  FETCH_COIN, 
  FETCH_COIN_PRICE_HISTORY,
  FETCH_COIN_TRANSACTION,
  FETCH_COIN_DETAILS,
  FETCH_COIN_ORDER_BOOK
} from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case `${FETCH_COIN}_FULFILLED`: {
    const coin = {...state[action.meta], KRW: action.payload.data.RAW[action.meta].KRW};
    return {...state, [action.meta]: coin};
  }
  case `${FETCH_COIN_PRICE_HISTORY}_FULFILLED`: {
    const coin = {...state[action.meta], price_history: action.payload.data.Data};
    return {...state, [action.meta]: coin};
  }
  case `${FETCH_COIN_TRANSACTION}_FULFILLED`: {
    const coin = {...state[action.meta], transaction: action.payload.data};
    return {...state, [action.meta]: coin};
  }
  case `${FETCH_COIN_DETAILS}_FULFILLED`: {
    const coin = {...state[action.meta], details: action.payload.data.Data};
    return {...state, [action.meta]: coin};
  }
  case `${FETCH_COIN_ORDER_BOOK}_FULFILLED`: {
    const coin = {...state[action.meta], order_book: action.payload.data.data};
    return {...state, [action.meta]: coin};
  }
  default:
    return state;
  }
}