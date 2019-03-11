import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SandwichNavigationContainer from './sandwichNavigationContainer';
import configureStore from '../store/configureStore';
import {setCredentials} from '../actions/navigationBar';

const store = configureStore();

class SandwichNavigationRedux extends Component {
  componentWillMount() {
  	store.dispatch(setCredentials(this.props.signedin, this.props.admin));
  }
  render() {
    return (
      <Provider store={store}>
        <SandwichNavigationContainer />
      </Provider>
    );
  }
}

export default SandwichNavigationRedux;
