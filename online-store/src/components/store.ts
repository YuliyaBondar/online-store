import { LegoItem } from './types';
import '../styles/store.css';
import { ProductsList } from './productsList';
import { Basket } from './Basket';

class Store {
    data: Array<LegoItem>;
    productsList: ProductsList;
    basket: Basket;
    constructor(data: Array<LegoItem>) {
        this.data = data;
        this.productsList = new ProductsList(data);
        this.basket = new Basket(data); //TODO:

    }

    async render() {
        document.body.innerHTML = `
        <header class="header">
          <nav class="nav">
            <img class="logo" src="" alt="logo">
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
        <div class = "products">
        ${await this.productsList.render()}
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
    }
}

export default Store;
