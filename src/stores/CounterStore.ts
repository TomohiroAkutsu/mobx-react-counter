import { observable, IObservableValue, configure, computed, action, intercept } from 'mobx';

configure({enforceActions: 'always'});

export type CounterStoreType = {
  currentCount: number;
  count: () => void;
  incrementCount: () => void;
}

export default class CounterStore {
  private currentCount: IObservableValue<number> = observable.box(0);

  @computed
  get count(): number {
    return this.currentCount.get();
  }

  @computed
  get doubleCount(): number {
    return this.currentCount.get() * 2;
  }

  @action.bound
  incrementCount() {
    this.currentCount.set(this.count + 1);
  }

  @action.bound
  decrementCount() {
    this.currentCount.set(this.count - 1);
  }
}