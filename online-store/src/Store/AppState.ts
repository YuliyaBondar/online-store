import { Basket } from '../components/Basket';
import ProductsCarts from '../components/ProductsCarts';
import Summary from '../components/Summary';
import { IState } from './IState';

const DEFAULT_STATE: IState = {
  app: null,
  store: null,
  basket: new Basket(),
  products: [],
  summary: new Summary(),
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
}

export const appState = new AppState();
