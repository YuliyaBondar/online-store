import { LegoItem } from "./types";
import '../styles/basket.css';

export class Basket {
  orders:LegoItem[]
  constructor(orders: LegoItem[]){
    this.orders = orders;
  }

  render () {
    return `
    <p>In your basket are</p>
    <p>Number of orders: ${this.orders.length}<p>
    <p>Total cost: ${this.orders.map(item => item.price).reduce((accum, item) => accum + item, 0).toFixed(2)}$</p>
    <button class="basket__byuButton">Go to buy</button>
    `
    }
}