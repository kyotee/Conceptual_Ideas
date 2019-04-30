import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ImageDifferencesContainer from './imageDifferencesContainer';
import configureStore from '../store/configureStore';

const store = configureStore();

class ImageDifferencesRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <ImageDifferencesContainer index={this.props.index} />
      </Provider>
    );
  }
}

export default ImageDifferencesRedux;
