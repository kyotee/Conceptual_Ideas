import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';
import configureStore from '../store/configureStore';
import {setCounter} from '../actions/counter'

const store = configureStore();

class CounterRedux extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

export default CounterRedux;