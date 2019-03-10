import C from './navigationBarTypes.js';

export function setCredentials(signedin,admin) {
  return {
    type: C.SET_LOGGED_IN,
    signedin: signedin,
    admin: admin
  };
}
