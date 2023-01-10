import App from '..';
import { Basket } from '../components/Basket';
import ProductsCarts from '../components/ProductsCarts';
import Summary from '../components/Summary';
import Store from '../components/store';
import { Categories, LegoItem, Names, Order, Promo, Sizes } from '../components/types';
import { Search } from '../components/search';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';

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
