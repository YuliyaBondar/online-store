import { isJSDocThisTag } from 'typescript';
import { AppState } from '../Store/AppState';
import '../styles/productsCarts.css';
import { ProductCart } from './ProductCart';
import { IComponent } from './interfaces';

class ProductsCarts implements IComponent {
  private carts: ProductCart[] = [];
  constructor() {
    this.carts = AppState.instance.state.basket.orders.map((item, index) => new ProductCart(index, item.legoItem));
  }
  async render() {
    return `
      <div class="basket-design__products-design products-design">
        <div class="products-design__header">
          Products in Cart
        </div>
        ${this.carts.map((item) => item.render())}
      </div>
      `;
  }
  async addEvents() {
    this.carts.forEach((cart) => cart.addEvents());
  }
}

export default ProductsCarts;
