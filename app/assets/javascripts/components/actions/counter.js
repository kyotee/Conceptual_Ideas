import C from './counterTypes';

export function setCounter(counter) {
  return {
    type: C.SET_COUNTER,
    counter: counter
  };
}

export function increment() {
  return {
    type: C.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: C.DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
