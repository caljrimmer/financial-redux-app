
import { ActionCreators } from 'redux-undo';

export const RECEIVED_WS_DATA = 'RECEIVED_WS_DATA';
export const GRANULAR = false;
export const DEFAULT_THROTTLE = 5;

export function receivedWsData(value) {
  return {
    type: RECEIVED_WS_DATA,
    value : value
  };
}

