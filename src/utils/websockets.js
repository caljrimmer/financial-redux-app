import WebSocket from 'ws';
import _ from 'lodash';
import { DEFAULT_THROTTLE } from '../common/actions/bitcoin';

export default function(props) {

	let count = 0;

	if(process.browser){
		
		const ws = new WebSocket('wss://ws-feed.exchange.coinbase.com');

		ws.onopen = function open() {
		  var req = {
		    "type": "subscribe",
		    "product_id": "BTC-USD"
		  };
		  ws.send(JSON.stringify(req));
		};
		 
		ws.onmessage = function(data, flags) {
			let throttle = DEFAULT_THROTTLE;
			if(_.has(props,'params'))  throttle = props.params.throttle;
			if(count % throttle === 0){
				props.receivedWsData(data);	
			}
			count++;
		};

	}

};