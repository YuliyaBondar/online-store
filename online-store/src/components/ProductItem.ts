import { AppState } from '../Store/AppState';
import { locationResolver } from '../appResolver';

import { IComponent } from './interfaces';
import { LegoItem, Order } from './types';

import '../styles/ProductItem.css';
export class ProductItem implements IComponent {
  product: LegoItem;
  constructor(product: LegoItem) {
    this.product = product;
  }
  getHTMLId = () => `${this.product.id}`;

  render() {
    return `
    <div class="item">
    <h4 class="item__name">${this.product.name}</h4>
    <p class="item__logoConteiner"><img class="logoConteiner__logo item__logo" src ="${this.product.urlImage[0]}"></p>
    <p class="item__price">$${this.product.price}</p>
    <p class="item__count">Count on store ${this.product.amountOnStock}</p>
    <button class="item__btn item__buy" id=${this.getHTMLId()}>Add to cart</button>
    <button class="item__btn item__btn_tomato item__remove" id="remove-${this.getHTMLId()}">Remove from cart</button>
    <a id=href-${this.getHTMLId()}  href="#/products/${this.getHTMLId()}">
      <button class ="item__btn item__description">
        Description
      </button>
    </a>
    </div>
    `;
  }

  addEvents() {
    this.isAddedChecker();

    const addButton = document.getElementById(this.getHTMLId());
    addButton?.addEventListener('click', () => {
      this.addtoCart();
    });

    const removeBtn = document.getElementById(`remove-${this.getHTMLId()}`);
    removeBtn?.addEventListener('click', () => {
      this.removeFromCart();
    });

    const href = document.getElementById(`href-${this.getHTMLId()}`);
    href?.addEventListener('click', () => {
      locationResolver(`#/products/${this.getHTMLId()}`);
    });
  }

  isAddedChecker() {
    const addBtn = document.getElementById(this.getHTMLId());
    const removeBtn = document.getElementById(`remove-${this.getHTMLId()}`);
    if (AppState.instance.state.basket.orders.filter((item) => item.legoItem === this.product.id).length === 0) {
      addBtn?.classList.remove('hidden');
      removeBtn?.classList.add('hidden');
    } else {
      addBtn?.classList.add('hidden');
      removeBtn?.classList.remove('hidden');
    }
  }

  removeFromCart() {
    AppState.instance.state.basket.orders = AppState.instance.state.basket.orders.filter(
      (item) => item.legoItem !== this.product.id
    );
    this.isAddedChecker();
    AppState.instance.state.store?.renderHeader();
  }

  addtoCart() {
    const order: Order = { legoItem: this.product.id, count: 1 };
    AppState.instance.state.basket.orders.push(order);
    this.isAddedChecker();
    AppState.instance.state.store?.renderHeader();
  }
}
