import { LegoItem } from "./types";
import {ProductItem} from './ProductItem';
import { IComponent } from "./interfaces";

export class ProductsList implements IComponent {
  private products : LegoItem[] =[];
  productsComponents: ProductItem[]
  constructor(products: LegoItem[]) {
    this.products = products;
    this.productsComponents = this.products.map((product) => new ProductItem(product));
  }


async render () {
  return `${this.products.map((product) => new ProductItem(product)).map((item) => item.render()).join('')}`;
}

addEvents ()  {
  this.productsComponents.forEach((component) => component.addEvents());
};
}