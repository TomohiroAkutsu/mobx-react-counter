import { observable, reaction, configure, computed, action } from 'mobx';

configure({enforceActions: 'always'});

export type CounterStoreType = {
  currentCount: number;
  count: () => void;
  incrementCount: () => void;
}

export default class CounterStore {
  @observable private currentCount: number = 0;
  @computed get count(): number {
    return this.currentCount;
  }
  @computed get doubleCount(): number {
    return this.currentCount * 2;
  }
  @action.bound incrementCount() {
    this.currentCount++;
  }
  @action.bound decrementCount() {
    this.currentCount--;
  }
}