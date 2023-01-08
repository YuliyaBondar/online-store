import { Basket } from '../components/Basket';
import { Search } from '../components/search';

import { IState } from './IState';

const DEFAULT_STATE: IState = {
  app: null,
  store: null,
  basket: new Basket(),
  search: new Search(),
  products: [],
  promos: [],
  inputPromo: '',
};

export class AppState {
  static isExist = false;
  static instance: AppState;

  state = DEFAULT_STATE;

  constructor() {
    this.state.basket.orders = localStorage.orders ? JSON.parse(localStorage.orders) : this.state.basket.orders;
    if (AppState.isExist) {
      return AppState.instance;
    }

    AppState.isExist = true;
    AppState.instance = this;
  }

  static countProducts = () => {
    return this.instance.state.basket.orders.reduce((acc, prev) => acc + prev.count, 0);
  };

  static summaryCosts = () => {
    const legoOrdersMoney: number[] = [];
    this.instance.state.basket.orders.forEach((order) => {
      this.instance.state.products.filter((product) => {
        if (product.id === order.legoItem) legoOrdersMoney.push(product.price * order.count);
      });
    });
    return legoOrdersMoney.reduce((acc, prev) => acc + prev, 0).toFixed(2);
  };

  static summaryWithSales = () => {
    return (
      Number(this.summaryCosts()) -
      (Number(this.summaryCosts()) *
        this.instance.state.promos.map((item) => item.discount).reduce((acc, prev) => acc + prev, 0)) /
        100
    ).toFixed(2);
  };

  saveLocalStorageOrders() {
    localStorage.orders = JSON.stringify(this.state.basket.orders);
  }
}

export const appState = new AppState();
