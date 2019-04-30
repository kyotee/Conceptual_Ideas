import C from '../../actions/navigationBarTypes.js';

const initalState = {
    signedin: false,
    admin: false,
    collasp: false
};

export default function navigationBar(state = initalState, action) {
  switch (action.type) {
	case C.SET_LOGGED_IN:
		return { ...state, signedin: action.signedin, admin: action.admin };
	case C.SET_COLLASP:
		return { ...state, collasp: action.collasp };
	default:
	    return state;
  }
}
