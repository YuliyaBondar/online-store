import { AppState, appState } from '../Store/AppState';
import { Basket } from './Basket';
import { IComponent } from './interfaces';
import { LegoItem } from './types';
import '../styles/descriptionPage.css';

class DescriptionPage implements IComponent {
  product: LegoItem;
  basket: Basket;
  constructor(product: LegoItem) {
    this.product = product;
    this.basket = appState.state.basket;
  }

  async render() {
    //TODO: создать отдельный копонент для блок описания товара!
    //TODO: сделать нормальную верстку товара!
    //TODO: реализовать компонент навигации!
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
        <div class="bigView">
        <div class = "mainNav crumbs"></div>
        <div class="mainProduct">
        <div class="mainProduct__photos">
        <div><img class="mainProduct__img" src="${this.product.urlImage[0]}" alt="product-photo"></div>
        <div><img class="mainProduct__img" src="${this.product.urlImage[1]}" alt="product-photo"></div>
        </div>
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

  async renderCrumbs() {
    const crumbs = document.querySelector('.crumbs');
    const globalCrumb = document.createElement('div');
    globalCrumb.classList.add('crumb');
    globalCrumb.innerText = `LEGO`;
    crumbs?.appendChild(globalCrumb);
    const firstCrumb = document.createElement('div');
    firstCrumb.classList.add('crumb');
    firstCrumb.innerText = ` > `;
    crumbs?.appendChild(firstCrumb);
    const themeCrumb = document.createElement('div');
    themeCrumb.classList.add('crumb');
    themeCrumb.innerText = `${this.product.category}`;
    crumbs?.appendChild(themeCrumb);
    const secondCrumb = document.createElement('div');
    secondCrumb.classList.add('crumb');
    secondCrumb.innerText = ` > `;
    crumbs?.appendChild(secondCrumb);
    const nameCrumb = document.createElement('div');
    nameCrumb.classList.add('crumb');
    nameCrumb.innerText = `${this.product.name}`;
    crumbs?.appendChild(nameCrumb);
  }

  async addEvents() {
    await this.renderCrumbs();
    const images = document.querySelectorAll('.mainProduct__img');
    images.forEach((img) => {
      img.addEventListener('mouseover', () => this.addresize(img));
      img.addEventListener('mouseleave', () => this.removeresize(img));
    });
  }

  addresize(element: Element) {
    element.classList.add('resize-img');
  }
  removeresize(element: Element) {
    element.classList.remove('resize-img');
  }
}

export default DescriptionPage;
