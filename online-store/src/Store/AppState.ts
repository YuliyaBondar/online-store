import {IState} from './IState';

const DEFAULT_STATE: IState = {
  basket: {
   orders: [],
  },
  products: [],
}

export class AppState {
  static isExist = false;
  static instance: AppState;

  state  = DEFAULT_STATE;

  constructor() {
    if (AppState.isExist) {
      return AppState.instance;
    }

    AppState.isExist = true;
    AppState.instance = this;
  }
}

export const appState = new AppState();