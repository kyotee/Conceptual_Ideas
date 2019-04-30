import C from '../../actions/chatterTypes.js';

const initalState = {
  message: ''
};

export default function counter(state = initalState, action) {
  switch (action.type) {
  case C.SET_MESSAGE:
    return { ...state, message: state.message };   // ability to provide placeholder text 
  case C.UPDATE_MESSAGE:
    return { ...state, message: action.message };
  default:
    return state;
  }
}
