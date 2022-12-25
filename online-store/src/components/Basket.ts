import { LegoItem, Order } from "./types";
import '../styles/basket.css';
import { IBasket } from "../Store/IState";
import { IComponent } from "./interfaces";

export class Basket implements IComponent {
  orders:Order[]
  constructor(orders: Order[]){
    this.orders = orders;
  }

  render () {
    return `
    <p>In your basket are</p>
    <p>Number of orders: ${this.orders.length}<p>
    <p>Total cost: ${this.orders.map(item => item.legoItem.price).reduce((accum, item) => accum + item, 0).toFixed(2)}$</p>
    <button class="basket__byuButton">Go to buy</button>
    `
    }

  addEvents () {}
}