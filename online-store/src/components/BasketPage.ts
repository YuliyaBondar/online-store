import { AppState } from '../Store/AppState';

import { Basket } from './Basket';
import Summary from './Summary';
import { IComponent } from './interfaces';
import ProductsCarts from './ProductsCarts';

import '../styles/basketPage.css';

class BasketPage implements IComponent {
  basket: Basket;
  productsCarts: ProductsCarts;
  summary: Summary;
  basketRender: string;
  constructor(option: string = '') {
    this.basket = AppState.instance.state.basket;
    this.basketRender = this.basket.render();
    this.productsCarts = new ProductsCarts();
    if (option === 'design') this.summary = new Summary('design');
    else this.summary = new Summary();
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
          ${await this.basketRender}
        </header>
        <main class="main">
          <div class="basket-design">
            ${await this.productsCarts.render()}
            ${await this.summary.render()}
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
    await this.productsCarts.addEvents();
    await this.summary.addEvents();
  }
}

export default BasketPage;
