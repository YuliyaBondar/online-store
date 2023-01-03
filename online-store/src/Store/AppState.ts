import { Basket } from '../components/Basket';
import ProductsCarts from '../components/ProductsCarts';
import Summary from '../components/Summary';
import { IState } from './IState';

const DEFAULT_STATE: IState = {
  app: null,
  store: null,
  basket: new Basket(),
  products: [],
  promos: [],
  inputPromo: ``,
};

export class AppState {
  static isExist = false;
  static instance: AppState;

  state = DEFAULT_STATE;

  constructor() {
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
}

export const appState = new AppState();
