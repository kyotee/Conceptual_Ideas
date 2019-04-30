import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chatter from '../ui/chatter.js';
import * as ChatterActions from '../actions/chatter';

function mapStateToProps(state, ownProps) {
  return {
    message: state.chatter.message,
    messages: ownProps.messages,
    username: ownProps.username,
    user_id: ownProps.user_id
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatterActions, dispatch);
}

const ChatterContainer = connect(mapStateToProps, mapDispatchToProps)(Chatter);

export default ChatterContainer;
