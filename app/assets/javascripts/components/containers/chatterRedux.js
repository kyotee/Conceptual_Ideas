import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ChatterContainer from './chatterContainer';
import configureStore from '../store/configureStore';
import {setMessage} from '../actions/chatter';

const store = configureStore();

class ChatterRedux extends Component {
  componentWillMount() {
    store.dispatch(setMessage());
  }
  render() {
    return (
      <Provider store={store}>
        <ChatterContainer
          messages={this.props.messages} 
          username={this.props.username}
          user_id={this.props.user_id}
        />
      </Provider>
    );
  }
}

export default ChatterRedux;
