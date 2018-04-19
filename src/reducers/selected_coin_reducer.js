// export default function(state = "BTC,ETH,XRP,BCH,EOS,QTUM,DASH,BTG", action) {
export default function(state=null, action) {
  switch(action.type) {
  case 'COIN_SELECTED':
    return action.payload;
  }
  return state;
}