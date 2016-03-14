import {CONNECT_TO_SERVER, CONNECTED, DISCONNECTED} from './../actions';

const initialState = {
  status: ''
};

const connection = function (state = initialState, action) {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      return Object.assign({}, state, {status: ''});
    case CONNECTED:
      return Object.assign({}, state, {status: 'CONNECTED'});
    case DISCONNECTED:
      return Object.assign({}, state, {status: 'DISCONNECTED'});

    default:
      return state;
  }
};

const handshake = function (state = {}, action) {
  switch (action.type) {
    case 'DATA':
      return action.data;
    default:
      return state;
  }
};

export {
  connection,
  handshake
};