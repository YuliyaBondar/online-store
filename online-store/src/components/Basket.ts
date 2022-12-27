import { LegoItem, Order } from "./types";
import '../styles/basket.css';
import { IBasket } from "../Store/IState";
import { IComponent } from "./interfaces";
import { AppState } from "../Store/AppState";

export class Basket implements IComponent {
  orders:Order[]
  constructor(){
    this.orders = AppState.instance.state.basket.orders;
  }

  render () {
    //TODO: сделать нормальную верстку
    //TODO: реализовать компонент страницы заказа выбранных товарров
    //TODO: реализовать переход  по кнопке на компонент страницы заказа выбранных товаров
    return `
    <p>In your basket are</p>
    <p>Number of orders: ${this.orders.length}<p>
    <p>Total cost: ${this.orders.map(item => item.legoItem.price).reduce((accum, item) => accum + item, 0).toFixed(2)}$</p>
    <button class="basket__byuButton">Go to buy</button>
    `
    }

  addEvents () {}
}