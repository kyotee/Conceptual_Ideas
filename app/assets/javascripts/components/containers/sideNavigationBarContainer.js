import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideNavigationBar from '../ui/side_navigation_bar.js';
import * as NavigationBarActions from '../actions/navigationBar';

function mapStateToProps(state, ownProps) {
  return {
   	signedin: state.navigationBar.signedin,
    admin: state.navigationBar.admin,
    collasp: state.navigationBar.collasp
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NavigationBarActions, dispatch);
}

const SideNavigationBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideNavigationBar);

export default SideNavigationBarContainer;
