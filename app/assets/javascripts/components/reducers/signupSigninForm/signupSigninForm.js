import C from '../../actions/signupSigninFormTypes.js';

const initalState = {
  name: '',
  email: '',
  password: '',
  verifyPassword: ''
};

export default function counter(state = initalState, action) {
  switch (action.type) {
  case C.SET_NAME:
    return { ...state, name: action.name };
  case C.SET_EMAIL:
    return { ...state, email: action.email };
  case C.SET_PASSWORD:
    return { ...state, password: action.password };
  case C.SET_VERIFY_PASSWORD:
    return { ...state, verifyPassword: action.verifyPassword };
  default:
    return state;
  }
}
