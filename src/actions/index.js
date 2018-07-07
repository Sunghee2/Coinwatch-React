import axios from 'axios';

const ROOT_URL_API = 'https://min-api.cryptocompare.com/data/pricemultifull';
const BASE_URL_API = 'https://www.cryptocompare.com/api/data/coinsnapshotfullbyid';

export const FETCH_COIN_LIST = 'FETCH_COIN_LIST';
export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_COIN_DETAILS = 'FETCH_COIN_DETAILS';
export const FETCH_COIN_PRICE_HISTORY = 'FETCH_COIN_PRICE_HISTORY';
export const FETCH_COIN_ORDER_BOOK = 'FETCH_COIN_ORDER_BOOK';
export const FETCH_COIN_TRANSACTION = 'FETCH_COIN_TRANSACTION';

export function fetchCoinList() {
  const url = 'https://min-api.cryptocompare.com/data/all/coinlist';
  const request = axios.get(url, { header: {'Access-Control-Allow-Origin': '*'}});
  return {
    type: FETCH_COIN_LIST,
    payload: request
  };
}

export function fetchCoin(coin) {
  const url = `${ROOT_URL_API}?fsyms=${coin}&tsyms=KRW&e=Bithumb`;
  const request = axios.get(url);
  return {
    type: FETCH_COIN,
    payload: request,
    meta: coin
  };
}

export function fetchCoinDetails(id, coin) {
  const url = `${BASE_URL_API}?id=${id}`;
  const request = axios.get(url, { header: {'Access-Control-Allow-Origin': '*'}});
  return {
    type: FETCH_COIN_DETAILS,
    payload: request,
    meta: coin
  };
}

export function fetchCoinPriceHistory(coin) {
  const url = `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=KRW&limit=60&aggregate=12&e=BITHUMB`;
  const request = axios.get(url);
  return {
    type: FETCH_COIN_PRICE_HISTORY,
    payload: request,
    meta: coin
  };
}

export function fetchCoinOrderBook(coin) {
  const url = `https://api.bithumb.com/public/orderbook/${coin}`;
  const request = axios.get(url);
  return {
    type: FETCH_COIN_ORDER_BOOK,
    payload: request,
    meta: coin
  };
}

export function fetchCoinTransaction(coin) {
  const url = `https://api.bithumb.com/public/transaction_history/${coin}`;
  const request = axios.get(url);
  return {
    type: FETCH_COIN_TRANSACTION,
    payload: request,
    meta: coin
  };
} 