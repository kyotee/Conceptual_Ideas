import C from '../../actions/navigationBarTypes.js';

const initalState = {
    signedin: false,
    admin: false
};

export default function navigationBar(state = initalState, action) {
  switch (action.type) {
  case C.SET_LOGGED_IN:
	  return { ...state, signedin: action.signedin, admin: action.admin };
  default:
    return state;
  }
}
