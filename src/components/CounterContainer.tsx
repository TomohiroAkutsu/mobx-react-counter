import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import CounterStoreType from '../stores/CounterStore';

type Props = {
  counterStore?: CounterStoreType;
}

@inject('counterStore')
@observer
class CounterContainer extends Component<Props> {
  render() {
    const { counterStore } = this.props;
    return (
      <>
        <button onClick={counterStore!.incrementCount}>+1</button>
        <p>count is {counterStore!.count}</p>
        <p>double count is {counterStore!.doubleCount}</p>
        <button onClick={counterStore!.decrementCount}>-1</button>
      </>
    )
  }
}

export default CounterContainer;
