import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SandwichNavigation from '../ui/sandwich_navigation.js';

function mapStateToProps(state,ownProps) {
	return {
		signedin: ownProps.signedin,
		admin: ownProps.admin
	}
}

const SandwichNavigationContainer = connect(mapStateToProps, null)(SandwichNavigation);

export default SandwichNavigationContainer;
