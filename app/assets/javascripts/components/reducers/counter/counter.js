import C from '../../actions/counterTypes.js';

const initalState = {
  counter: 0
};

export default function counter(state = initalState.counter, action) {
  switch (action.type) {
  case C.INCREMENT_COUNTER:
    return state + 1 ;
  case C.DECREMENT_COUNTER:
    return state - 1;
  case C.SET_COUNTER:
    return action.counter;
  default:
    return state;
  }
}
