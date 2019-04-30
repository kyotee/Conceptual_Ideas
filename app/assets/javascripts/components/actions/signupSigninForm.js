import C from './signupSigninFormTypes.js';

export function setName(name) {
  return {
    type: C.SET_NAME,
    name: name
  };
}

export function setEmail(email) {
  return {
    type: C.SET_EMAIL,
    email: email
  };
}

export function setPassword(password) {
  return {
    type: C.SET_PASSWORD,
    password: password
  };
}

export function setVerifyPassword(verifyPassword) {
  return {
    type: C.SET_VERIFY_PASSWORD,
    verifyPassword: verifyPassword
  };
}
