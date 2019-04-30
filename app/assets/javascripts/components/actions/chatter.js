import C from './chatterTypes.js';

export function setMessage() {
  return {
    type: C.SET_MESSAGE
  };
}

export function updateMessage(message) {
  return {
    type: C.UPDATE_MESSAGE,
    message: message
  };
}
