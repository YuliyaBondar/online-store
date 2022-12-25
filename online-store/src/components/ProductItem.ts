import { isJSDocTypeExpression } from 'typescript';
import '../styles/ProductItem.css';
import { IComponent } from './interfaces';
import {LegoItem} from './types'
export class ProductItem implements IComponent {
  product:LegoItem
  constructor(product: LegoItem){
    this.product = product;
  }
getHTMLId = () => `${this.product.id}`;

  render () {
    return `
    <div class="item">
    <h4 class="item__name">${this.product.name}</h4>
    <p class="item__logoConteiner"><img class="logoConteiner__logo item__logo" src ="${this.product.urlImage[0]}"></p>
    <p class="item__price">$${this.product.price}</p>
    <p class="item__count">Count on store ${this.product.amountOnStock}</p>
    <button class="item__buy" id=${this.getHTMLId()}>Add to cart</button>
    <button class ="item__description">Description</button>
    </div>
    `
  }

  addEvents ()  {
    const button = document.getElementById(this.getHTMLId());
    button?.addEventListener('click', ()=> {
      alert(`${this.product.name} add to basket`);
    });
}
}