import C from '../actions/counterTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case C.INCREMENT_COUNTER:
    return state + 1;
  case C.DECREMENT_COUNTER:
    return state - 1;
  case C.SET_COUNTER:
    return action.counter;
  default:
    return state;
  }
}
