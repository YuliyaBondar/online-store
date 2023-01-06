import App from '..';
import { Basket } from '../components/Basket';
import ProductsCarts from '../components/ProductsCarts';
import Summary from '../components/Summary';
import Store from '../components/store';
import { LegoItem, Order, Promo } from '../components/types';

export interface IState {
  app: App | null;
  store: Store | null;
  basket: Basket;
  products: LegoItem[];
  promos: Promo[];
  inputPromo: string;
}

export interface IBasket {
  orders: Order[];
}
