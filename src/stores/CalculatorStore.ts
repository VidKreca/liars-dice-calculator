import { makeAutoObservable } from "mobx";

export type Side = 1 | 2 | 3 | 4 | 5 | 6

export type Counts = Record<Side, number>

export class CalculatorStore {
  total = 10;
  own: Counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  get ownTotal() {
    return Object.values(this.own).reduce((sum, count) => sum + count, 0);
  }

  get probableCounts(): Counts {
    const ones = this.own[1] + (this.total - this.ownTotal) / 6;

    return {
      1: ones,
      2: this.own[2] + ones + (this.total - this.ownTotal - ones) / 5,
      3: this.own[3] + ones + (this.total - this.ownTotal - ones) / 5,
      4: this.own[4] + ones + (this.total - this.ownTotal - ones) / 5,
      5: this.own[5] + ones + (this.total - this.ownTotal - ones) / 5,
      6: this.own[6] + ones + (this.total - this.ownTotal - ones) / 5,
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  setTotal(value: number) {
    this.total = value;
  }

  setOwn(side: Side, count: number) {
    this.own[side] = count;
  }
}
