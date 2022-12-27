import App from "..";
import { Basket } from "../components/Basket";
import Store from "../components/store";
import { LegoItem, Order } from "../components/types";

export interface IState {
  app : App | null;
  store: Store | null;
  basket: IBasket;
  products: LegoItem[];
}


export interface IBasket {
  orders : Order[];
}