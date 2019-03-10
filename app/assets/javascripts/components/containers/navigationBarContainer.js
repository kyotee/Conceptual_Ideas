import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from '../ui/navigation_bar.js';
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

const NavigationBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

export default NavigationBarContainer;
