import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignupSigninForm from '../ui/signup_signin_form.js';
import * as SignupSigninFormActions from '../actions/signupSigninForm';

function mapStateToProps(state, ownProps) {
  return {
    name: state.signupSigninForm.name,
    email: state.signupSigninForm.email,
    password: state.signupSigninForm.password,
    verifyPassword: state.signupSigninForm.verifyPassword,
    formType: ownProps.formType
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SignupSigninFormActions, dispatch);
}

const SignupSigninFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupSigninForm);

export default SignupSigninFormContainer;
