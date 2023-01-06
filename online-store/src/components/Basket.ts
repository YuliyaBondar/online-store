import { LegoItem, Order } from './types';
import '../styles/basket.css';
import { IBasket } from '../Store/IState';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';
import { locationResolver } from '../appResolver';

export class Basket implements IComponent {
  orders: Order[];
  constructor() {
    this.orders = [];
  }

  render() {
    return `
      <a class='basket' href="#/basket">
      <img class="basket__logo" src="https://github.com/poznerrr/fakedb/blob/main/basket.png?raw=true" alt="basket-logo">
      <div class="basket__count">
      ${AppState.countProducts()}
      </div>
    </a>
    `;
  }

  addEvents() {
    const basketByuButton = document.getElementsByClassName('basket')[0];
    basketByuButton.addEventListener('click', () => this.goToBasket());
  }

  goToBasket() {
    locationResolver(`#/basket`);
  }
}

/* TODO: В отдельный блок в хедер
<p>Total cost: ${this.orders
        .map((item) => item.legoItem.price)
        .reduce((accum, item) => accum + item, 0)
        .toFixed(2)}$</p>
*/
