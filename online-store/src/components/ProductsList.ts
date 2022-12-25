import { LegoItem } from "./types";
import {ProductItem} from './ProductItem';

export class ProductsList {
  private products : LegoItem[] =[];
  constructor(products: LegoItem[]) {
    this.products = products;
  }


async render () {
  return `${this.products.map((product) => new ProductItem(product)).map((item) => item.render()).join('')}`;
}

}