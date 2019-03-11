import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SandwichNavigation from '../ui/sandwich_navigation.js';
import * as NavigationBarActions from '../actions/navigationBar';

function mapStateToProps(state) {
	return {
		signedin: state.navigationBar.signedin,
		admin: state.navigationBar.admin
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(NavigationBarActions, dispatch);
}

const SandwichNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(SandwichNavigation);

export default SandwichNavigationContainer;
