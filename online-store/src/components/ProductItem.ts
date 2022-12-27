import { isJSDocTypeExpression } from 'typescript';
import '../styles/ProductItem.css';
import { IComponent } from './interfaces';
import {LegoItem, Order} from './types'
import { locationResolver } from '../appResolver';
import { AppState, appState } from '../Store/AppState';
import Store from './store';
import App from '..';
export class ProductItem implements IComponent {
  product:LegoItem
  constructor(product: LegoItem){
    this.product = product;
  }
getHTMLId = () => `${this.product.id}`;

  render () { //TODO: сделать нормальную верстку. Довать возможность выбора количества товара!
    return `
    <div class="item">
    <h4 class="item__name">${this.product.name}</h4>
    <p class="item__logoConteiner"><img class="logoConteiner__logo item__logo" src ="${this.product.urlImage[0]}"></p>
    <p class="item__price">$${this.product.price}</p>
    <p class="item__count">Count on store ${this.product.amountOnStock}</p>
    <button class="item__buy" id=${this.getHTMLId()}>Add to cart</button>
    <button class ="item__description">
    <a id=href-${this.getHTMLId()}  href="#/products/${this.getHTMLId()}">
    Description
    </a></button>
    </div>
    `
  }

  addEvents ()  {
    const button = document.getElementById(this.getHTMLId());
    button?.addEventListener('click', ()=> {
      //TODO:  Добавить логику: если есть товар в корзине, то просто увеличить количество товара
      const order: Order = {legoItem: this.product , count:1};
      AppState.instance.state.basket.orders.push(order);
      alert(`${this.product.name} add to basket`);
      AppState.instance.state.app?.start();
    });

    const href = document.getElementById(`href-${this.getHTMLId()}`);
    href?.addEventListener('click', () => {
      console.log('goto location');
      locationResolver(`#/products/${this.getHTMLId()}`, this.product);
    })

}
}