import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImageDifferences from '../ui/image_differences.js';
import * as ImageDifferencesActions from '../actions/imageDifferences';

function mapStateToProps(state, ownProps) {
  return {
  	view: state.imageDifferences.view,
	imgShowOne: state.imageDifferences.imgShowOne,
    imgShowTwo: state.imageDifferences.imgShowTwo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageDifferencesActions, dispatch);
}

const ImageDifferencesContainer = connect(mapStateToProps, mapDispatchToProps)(ImageDifferences);

export default ImageDifferencesContainer;
