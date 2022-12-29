import { LegoItem } from './types';
import '../styles/store.css';
import { ProductsList } from './productsList';
import { Basket } from './Basket';
import { AppState, appState } from '../Store/AppState';
import { IComponent } from './interfaces';

class Store implements IComponent {
    productsList: ProductsList;
    basket: Basket;
    constructor() {
        this.productsList = new ProductsList();
        this.basket = new Basket();
    }

    async render() {
        //TODO: реализовать компонент навигации!
        //TODO: реализовать нормальную верстку!
        //TODO: реализовать компоненты фильтров! (по требованиям - две штуки!)
        //TODO: реализовать компоненту сортировки выведенных товаров
        document.body.innerHTML = `
        <header class="header">
          <nav class="nav">
            <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
            <h1>LEGO STORE</h1>
          </nav>
        </header>
        <main class="main">
        <div class = "userParams">
        <div class ="basket">
        ${await this.basket.render()}
        </div>
        <div class ="filters">
        Фильтры TODO
        </div>
        </div>
        <div class="bigView">
        <div class=navSearchPanel>
        <div class = "mainNav">Реализовать компонент навигации</div>
        <div class = "search">Реализовать компонент общего поиска</div>
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
    }
}

export default Store;
