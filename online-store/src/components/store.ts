import { AppState } from '../Store/AppState';

import { ProductsList } from './productsList';
import { Basket } from './Basket';
import { IComponent } from './interfaces';
import { Search } from './search';
import { Filter } from './filter';
import { Categories, LegoItem, Names, Sizes } from './types';

import '../styles/store.css';
import '../styles/productItem.css';

class Store implements IComponent {
  [x: string]: any;
  productsList: ProductsList;
  basket: Basket;
  search: Search;
  filter: Filter;
  private products: LegoItem[] = [];
  constructor() {
    this.productsList = new ProductsList();
    this.basket = AppState.instance.state.basket;
    this.search = AppState.instance.state.search;
    this.filter = AppState.instance.state.filter;
    this.sort = AppState.instance.state.sort;
    this.products = AppState.instance.state.filteredToyList;
  }

  async render() {
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
          <div class = "sortComponent">${await this.sort.render()}</div>
          <div>Found: ${this.products.length}</div>
          <div class = "searchComponent">${await this.search.render()}</div>
          <div class="viewComponent">
            <img src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/plitka.png" alt="plitka" class="view_img plitka">
            <img src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/list.png" alt="list" class="view_img list">
          </div>
        </div>
        <div class ="products">
          ${await this.productsList.render()}
        </div>
        </div>
        <div class="overlay">
          <p class="error__text">Sorry, no matches found</p>
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
    this.sort.addEvents();
    
    const viewPlitka = document.querySelector('.plitka');
    const viewList = document.querySelector('.list');
    const productItems = document.querySelectorAll('.item');
    (<HTMLImageElement>viewPlitka).addEventListener('click', () => {
      productItems.forEach((item) => {
        item.classList.remove('item_row');
      });
    });
    (<HTMLImageElement>viewList).addEventListener('click', () => {
      productItems.forEach((item) => {
        item.classList.add('item_row');
      });
    });

    const errorOverlay = document.querySelector('.overlay');
    const errorText = document.querySelector('.error__text');
    if (this.products.length === 0) {
      (<HTMLElement>errorOverlay).style.display = 'block';
      (<HTMLElement>errorText).style.display = 'block';
      (<HTMLElement>errorText).textContent = 'Sorry, no matches found';
    } else {
      (<HTMLElement>errorOverlay).style.display = 'none';
      (<HTMLElement>errorText).style.display = 'none';
    }
    (<HTMLElement>errorOverlay).addEventListener('click', () => {
      (<HTMLElement>errorOverlay).style.display = 'none';
      Object.keys(AppState.instance.state.chosenCategories).forEach((key) => {
        AppState.instance.state.chosenCategories[key as keyof Categories] = false;
      })
      Object.keys(AppState.instance.state.chosenSizes).forEach((key) => {
        AppState.instance.state.chosenSizes[key as keyof Sizes] = false;
      })
      Object.keys(AppState.instance.state.chosenNames).forEach((key) => {
        AppState.instance.state.chosenNames[key as keyof Names] = false;
      })
      AppState.instance.state.priceRange = [7.99, 1458.99];
      AppState.instance.state.amountRange = [1, 8];
      AppState.instance.state.searchInput = '';
      AppState.instance.state.filteredToyList = AppState.instance.state.products;
      AppState.instance.state.app?.toStore();
    });
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
