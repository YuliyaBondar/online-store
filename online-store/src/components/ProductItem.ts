import '../styles/ProductItem.css';
import {LegoItem} from './types'
export class ProductItem {
  product:LegoItem
  constructor(product: LegoItem){
    this.product = product;
  }
  render () {
    return `
    <div class="item">
    <h4 class="item__name">${this.product.name}</h4>
    <p class="item__logoConteiner"><img class="logoConteiner__logo item__logo" src ="${this.product.urlImage[0]}"></p>
    <p class="item__price">$${this.product.price}</p>
    <p class="item__count">Count on store ${this.product.amountOnStock}</p>
    <button class="item__buy">Add to cart</button>
    <button class ="item__description">Description</button>
    </div>
    `
  }
}