import { Basket } from "../components/Basket";
import { LegoItem, Order } from "../components/types";

export interface IState {
  basket: IBasket;
  products: LegoItem[];
}


export interface IBasket {
  orders : Order[];
}