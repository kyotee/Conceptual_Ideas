import C from './navigationBarTypes.js';

export function setCredentials(signedin,admin) {
  return {
    type: C.SET_LOGGED_IN,
    signedin: signedin,
    admin: admin
  };
}

export function setCollasp(collasp) {
  return {
    type: C.SET_COLLASP,
    collasp: collasp
  };
}
