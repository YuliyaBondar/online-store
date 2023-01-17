import { Categories, LegoItem, Names, Order, Promo, Sizes } from '../components/types';
import Store from '../components/store';
import { Basket, Filter, Search, Sort } from '../components';

import App from '..';

export interface IState {
  app: App | null;
  store: Store | null;
  basket: Basket;
  search: Search;
  filter: Filter;
  sort: Sort;
  products: LegoItem[];
  promos: Promo[];
  inputPromo: string;
  filteredToyList: LegoItem[];
  searchInput: string;
  chosenCategories: Categories;
  chosenSizes: Sizes;
  chosenNames: Names;
  priceRange: Array<number>;
  amountRange: Array<number>;
  sortKey: string,
}

export interface IBasket {
  orders: Order[];
}
