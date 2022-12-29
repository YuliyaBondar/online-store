import { AppState } from '../Store/AppState';
import { Basket } from './Basket';
import { IComponent } from './interfaces';
import '../styles/basketPage.css';
import ProductsCarts from './ProductsCarts';

class BasketPage implements IComponent {
  basket: Basket;
  productsCarts: ProductsCarts;
  constructor() {
    this.basket = AppState.instance.state.basket;
    this.productsCarts = new ProductsCarts();
  }
  async render() {
    document.body.innerHTML = `
        <header class="header">
          <nav class="nav">
            <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
            <h1>LEGO STORE</h1>
          </nav>
          <div>
          </div>
          ${await this.basket.render()}
        </header>
        <main class="main">
          <div class="basket-design">
            ${await this.productsCarts.render()}
            ${await AppState.instance.state.summary.render()}
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
  async addEvents() {
    this.productsCarts.addEvents();
  }
}

export default BasketPage;
