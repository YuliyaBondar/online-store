import { Basket } from './Basket';
import { IComponent } from './interfaces';
import { LegoItem } from './types';

import { AppState } from '../Store/AppState';
import { locationResolver } from '../appResolver';

import '../styles/descriptionPage.css';

class DescriptionPage implements IComponent {
  product: LegoItem;
  basket: Basket;
  isNoOrders: boolean;
  constructor(product: LegoItem) {
    this.product = product;
    this.basket = AppState.instance.state.basket;
    this.isNoOrders =
      AppState.instance.state.basket.orders.filter((item) => item.legoItem === this.product.id).length === 0;
  }

  async render() {
    document.body.innerHTML = `
    <header class="header">
    <a href="#/">
      <nav class="nav">
        <img
          class="logo"
          src="https://raw.githubusercontent.com/YuliyaBondar/image-data/master/blocks_logo.png"
          alt="logo"
        />
        <h1>LEGO STORE</h1>
      </nav>
    </a>
    <p>Cart total: $${AppState.summaryCosts()}</p>
    ${await this.basket.render()}
  </header>
  <main class="main">
    <div class="bigView">
      <div class="mainNav crumbs"></div>
      <div class="mainProduct">
        <div class="mainProduct__photos">
          <div><img class="mainProduct__img" src="${this.product.urlImage[0]}" alt="product-photo" /></div>
          <div><img class="mainProduct__img" src="${this.product.urlImage[1]}" alt="product-photo" /></div>
        </div>
        <div class="mainProduct__description">
          <p><span class="mainProduct__span">Name:</span>${this.product.name}</p>
          <p><span class="mainProduct__span">Age:</span>${this.product.ageFrom}+</p>
          <p><span class="mainProduct__span">Price:</span>$${this.product.price}</p>
          <p><span class="mainProduct__span">Category:</span>${this.product.category}</p>
          <p><span class="mainProduct__span">Details:</span>${this.product.numbOfDetails}</p>
          <p><span class="mainProduct__span">Size of details:</span>${this.product.sizeOfDetails}</p>
          <p><span class="mainProduct__span">Interests:</span>${this.product.interests}</p>
          <p><span class="mainProduct__span">Amount on stock:</span>${this.product.amountOnStock}</p>
          <p><span class="mainProduct__span">Description:</span>${this.product.description}</p>
        </div>
        <div class="description__buttons">
          <button class="description__button mainProduct__add">Add to cart</button>
          <button class="description__button mainProduct__remove">Remove from cart</button>
          <button class="description__button mainProduct__buy">Buy now</button>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <div class="github-links">
      <img
        class="footer__svg"
        src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/github.svg"
        alt="rs_school_js"
      />
      <a href="https://github.com/YuliyaBondar">YuliyaBondar</a>
      <a href="https://github.com/poznerrr">poznerrr</a>
    </div>
    <p>2022</p>
    <a href="https://rs.school/js/"
      ><img
        class="footer__svg"
        src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/rss.svg"
        alt="rs_school_js"
    /></a>
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

    this.buttonChanger();
    const btnAdd = document.querySelector('.mainProduct__add');
    btnAdd?.addEventListener('click', () => {
      this.goToBasket();
    });

    const btnRemove = document.querySelector('.mainProduct__remove');
    btnRemove?.addEventListener('click', () => {
      this.removeFromBasket();
    });

    const btnBuy = document.querySelector('.mainProduct__buy');
    btnBuy?.addEventListener('click', () => {
      this.buyNow();
    });
  }

  addresize(element: Element) {
    element.classList.add('resize-img');
  }
  removeresize(element: Element) {
    element.classList.remove('resize-img');
  }

  buttonChanger() {
    const btnAdd = document.querySelector('.mainProduct__add');
    const btnRemove = document.querySelector('.mainProduct__remove');
    if (this.isNoOrders) {
      btnAdd?.classList.remove('hidden');
      btnRemove?.classList.add('hidden');
    } else {
      btnAdd?.classList.add('hidden');
      btnRemove?.classList.remove('hidden');
    }
  }

  goToBasket() {
    AppState.instance.state.basket.orders.push({ legoItem: this.product.id, count: 1 });
    AppState.instance.saveLocalStorageOrders();
    locationResolver(`#/products/${this.product.id}`);
  }

  removeFromBasket() {
    AppState.instance.state.basket.orders = AppState.instance.state.basket.orders.filter(
      (item) => item.legoItem !== this.product.id
    );
    AppState.instance.saveLocalStorageOrders();
    locationResolver(`#/products/${this.product.id}`);
  }

  buyNow() {
    if (this.isNoOrders) {
      AppState.instance.state.basket.orders.push({ legoItem: this.product.id, count: 1 });
      AppState.instance.saveLocalStorageOrders();
    }
    locationResolver('#/basket', 'design');
  }
}

export default DescriptionPage;
