import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SandwichNavigationContainer from './sandwichNavigationContainer';
import configureStore from '../store/configureStore';

const store = configureStore();

class SandwichNavigationRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <SandwichNavigationContainer signedin={this.props.signedin} admin={this.props.admin} />
      </Provider>
    );
  }
}

export default SandwichNavigationRedux;
