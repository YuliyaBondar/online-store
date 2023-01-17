import { AppState } from '../Store/AppState';

import { IComponent } from './interfaces';
import { LegoItem } from './types';

import '../styles/productCart.css';

export class ProductCart implements IComponent {
  cartIndex: number;
  legoItem: LegoItem;
  orderCounts: number;
  orderSumm: number;
  constructor(cartIndex: number, legoIndex: number) {
    this.cartIndex = cartIndex + 1;
    this.legoItem = AppState.instance.state.products.filter((item) => item.id === legoIndex)[0];
    this.orderCounts = AppState.instance.state.basket.orders.filter((order) => order.legoItem === legoIndex)[0].count;
    this.orderSumm = this.orderCounts * this.legoItem.price;
  }

  getHTMLId = () => `${this.legoItem.id}`;

  render() {
    return `
    <div class="productCart">
    <div class="productCart__index">${this.cartIndex}</div>
    <div class="productCart__img">
      <img src="${this.legoItem.urlImage[0]}" alt="product Image" />
    </div>
    <div class="productCart__desc">
      <p>${this.legoItem.name}</p>
      <hr />
      <p>${this.legoItem.description}</p>
      <div class="productCart__adding-desc">
        <p>Age: ${this.legoItem.ageFrom}+</p>
        <p>Numb of details: ${this.legoItem.numbOfDetails}</p>
        <p>Category: "${this.legoItem.category}"</p>
      </div>
    </div>
    <div class="productCard__entity">
      <div>Stock:${this.legoItem.amountOnStock}</div>
      <div class="productCard__plusMinusCount plusMinusCount">
        <button class="plusMinusCount_button" id="plus-${this.getHTMLId()}">+</button>
        <p>${this.orderCounts}</p>
        <button class="plusMinusCount_button" id="minus-${this.getHTMLId()}">-</button>
      </div>
      <div>$${this.orderSumm.toFixed(2)}</div>
    </div>
  </div>
      `;
  }
  addEvents() {
    const plusButton = document.getElementById(`plus-${this.getHTMLId()}`);
    plusButton?.addEventListener('click', () => this.plusOneItem());

    const minusButton = document.getElementById(`minus-${this.getHTMLId()}`);
    minusButton?.addEventListener('click', () => this.minusOneItem());
  }

  plusOneItem() {
    if (this.orderCounts >= this.legoItem.amountOnStock) return;
    AppState.instance.state.basket.orders.map((order) =>
      order.legoItem === this.legoItem.id ? (order.count += 1) : this.legoItem.id
    );
    AppState.instance.saveLocalStorageOrders();
    AppState.instance.state.app?.toBasket();
  }

  minusOneItem() {
    if (this.orderCounts <= 1) {
      AppState.instance.state.basket.orders = AppState.instance.state.basket.orders.filter(
        (order) => order.legoItem !== this.legoItem.id
      );
    } else {
      AppState.instance.state.basket.orders.map((order) =>
        order.legoItem === this.legoItem.id ? (order.count -= 1) : this.legoItem.id
      );
    }
    AppState.instance.saveLocalStorageOrders();
    AppState.instance.state.app?.toBasket();
  }
}
