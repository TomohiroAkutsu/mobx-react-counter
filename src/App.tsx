import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import './App.css';
import CounterContainer from './components/CounterContainer';
import CounterStore from './stores/CounterStore';

const counterStore = new CounterStore();

class App extends Component {
  render() {
    return (
      <Provider
        counterStore={counterStore}
      >
        <CounterContainer />
      </Provider>
    );
  }
}

export default App;
