import { RECEIVED_WS_DATA, GRANULAR } from '../actions/bitcoin';

const idTag = (array, data) => {
  array.unshift(data);
  array = array.slice(0,4);
  array.forEach((item,i) => {
    item.id = i;
  });
  return array;
}

export default function bitcoin(state = {trades:[],count:0}, action) {
  switch (action.type) {
  case RECEIVED_WS_DATA:
    const data = JSON.parse(action.value.data);
    if(!GRANULAR && data.type !== 'done') return state;
    const trades = idTag(state.trades,data)
  	const count = state.count + 1;
    return {
      	trades : trades,
      	count : count
      };
  default:
    return state;
  }
}