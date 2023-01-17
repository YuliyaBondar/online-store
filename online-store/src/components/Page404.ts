import { AppState } from '../Store/AppState';

import { Basket } from './Basket';
import { IComponent } from './interfaces';

import '../styles/page404.css';

class Page404 implements IComponent {
  basket: Basket;
  constructor() {
    this.basket = AppState.instance.state.basket;
  }
  async render() {
    document.body.innerHTML = `
    <header class="header">
    <a href ="#/">
    <nav class="nav">
      <img class="logo" src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png" alt="logo">
      <h1>LEGO STORE</h1>
    </nav>
    </a>
    <p>Cart total: $${AppState.summaryCosts()}</p>
    ${await this.basket.render()}
  </header>
  <main class="main">
  <p class="not-found__main">
  Sorry, that page does not exist. <a href="#/">Go to main page</a>
  </p>
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

  async addEvents() {}
}

export default Page404;
