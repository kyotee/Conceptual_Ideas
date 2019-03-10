import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import NavigationBarContainer from './navigationBarContainer';
import configureStore from '../store/configureStore';
import {setCredentials} from '../actions/navigationBar';

const store = configureStore();

class NavigationBarRedux extends Component {
  componentWillMount() {
  	store.dispatch(setCredentials(this.props.signedin, this.props.admin));
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationBarContainer />
      </Provider>
    );
  }
}

export default NavigationBarRedux;
