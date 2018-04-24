import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';

export const FETCH_COIN = 'FETCH_COIN';

export function fetchCoin(coin) {
  if(!coin) {
    coin='BTC,ETH,XRP,BCH,EOS,QTUM,DASH,BTG';
  }
  const url = `${ROOT_URL}?fsyms=${coin}&tsyms=KRW&e=Bithumb`;
  const request = axios.get(url);
  return {
    type: FETCH_COIN,
    payload: request
  };
}

export function selectCoin(coin) {
  return {
    type: 'COIN_SELECTED',
    payload: coin
  };
}