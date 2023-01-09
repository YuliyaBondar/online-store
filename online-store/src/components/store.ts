import { AppState } from '../Store/AppState';

import { ProductsList } from './productsList';
import { Basket } from './Basket';
import { IComponent } from './interfaces';
import { Search } from './search';

import '../styles/store.css';
import { Filter } from './filter';

class Store implements IComponent {
  [x: string]: any;
  productsList: ProductsList;
  basket: Basket;
  search: Search;
  filter: Filter;
  constructor() {
    this.productsList = new ProductsList();
    this.basket = AppState.instance.state.basket;
    this.search = AppState.instance.state.search;
    this.filter = AppState.instance.state.filter;
  }

  async render() {
    //TODO: реализовать компонент навигации!
    //TODO: реализовать компоненты фильтров! (по требованиям - две штуки!)
    //TODO: реализовать компоненту сортировки выведенных товаров
    document.body.innerHTML = `
        <header class="header">
        <a href="#/">
          <nav class="nav">
            <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
            <h1>LEGO STORE</h1>
          </nav>
          </a>
          <p>Cart total: $${AppState.summaryCosts()}</p>
          ${await this.basket.render()}
        </header>
        <main class="main">
        <div class = "userParams">
        <div class ="filters">
        ${await this.filter.render()}
        </div>
        </div>
        <div class="bigView">
        <div class=navSearchPanel>
        <div class = "mainNav">Реализовать компонент навигации</div>
        <div class = "searchComponent">${await this.search.render()}</div>
        </div>
        <div class ="sortBy">Sort by: TODO</div>
        <div class ="products">
        ${await this.productsList.render()}
        </div>
        </div>
        </main>
        <footer class="footer">
          <div class="github-links">
            <img class="footer__svg" src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/github.svg" alt="rs_school_js">
            <a href="https://github.com/YuliyaBondar">YuliyaBondar</a>
            <a href="https://github.com/poznerrr">poznerrr</a>
          </div>
          <p>2022</p>
          <a href="https://rs.school/js/"><img class="footer__svg" src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/rss.svg" alt="rs_school_js"></a>
        </footer>
      `;
    return '1';
  }

  async addEvents() {
    this.basket.addEvents();
    this.productsList.addEvents();
    this.search.addEvents();
    this.filter.addEvents();
  }

  async renderHeader() {
    const header = document.querySelector('.header');
    if (header)
      header.innerHTML = `
      <a href="#/">
        <nav class="nav">
          <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
          <h1>LEGO STORE</h1>
        </nav>
      </a>
      <p>Cart total: $${AppState.summaryCosts()}</p>
      ${await this.basket.render()}
      `;
  }
}

export default Store;
