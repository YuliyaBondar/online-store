import { AppState } from '../Store/AppState';
import { Basket } from './Basket';
import { IComponent } from './interfaces';
import { LegoItem } from './types';
import '../styles/descriptionPage.css';

class DescriptionPage implements IComponent {
  product: LegoItem;
  basket: Basket;
  constructor(product: LegoItem) {
    this.product = product;
    this.basket = new Basket();
  }

  async render() {
    //TODO: создать отдельный копонент для блок описания товара!
    //TODO: сделать нормальную верстку товара!
    //TODO: реализовать компонент навигации!
    document.body.innerHTML = `
    <header class="header">
    <nav class="nav">
      <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
      <h1>LEGO STORE</h1>
    </nav>
    <p>Cart total: $${AppState.summaryCosts()}</p>
    ${await this.basket.render()}
  </header>
        <main class="main">
        <div class="bigView">
        <div class=navSearchPanel>
        <div class = "mainNav">Реализовать компонент навигации</div>
        <div class = "search">Реализовать компонент общего поиска</div>
        </div>
        <div class="mainProduct">
        <p>${this.product.name}</p>
        <div><img class="mainProduct__img" src="${this.product.urlImage[0]}" alt="product-photo"></div>
        <div><img class="mainProduct__img" src="${this.product.urlImage[1]}" alt="product-photo"></div>
        <p>${this.product.ageFrom}</p>
        <p>${this.product.description}</p>
        <p>$${this.product.price}</p>
        <button class = "mainProduct__buy">Add to cart</button>
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

  async addEvents() {}
}

export default DescriptionPage;
