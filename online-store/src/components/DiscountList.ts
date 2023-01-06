import { IComponent } from './interfaces';
import { Promo } from './types';

import { AppState } from '../Store/AppState';

import '../styles/discountList.css';

class DiscountList implements IComponent {
  constructor() {}

  async render() {
    return `
    <div class="discount-list">
    <div class="discount-list__header">Applied codes</div>
    <div class="discount-list__discounts"></div>
    </div>
    `;
  }

  async addEvents() {
    AppState.instance.state.promos.forEach((promo) => {
      this.addPromoDiv(promo);
    });
  }

  addPromoDiv(promo: Promo) {
    const promoDiv = document.createElement('div');
    promoDiv.classList.add('discount-list__promo-div');
    const promoText = document.createElement('p');
    promoText.innerHTML = `${promo.description} - ${promo.discount}% - `;
    promoDiv.appendChild(promoText);
    const promoDrop = document.createElement('button');
    promoDrop.classList.add('discount-list__drop');
    promoDrop.innerText = `DROP`;
    promoDiv.appendChild(promoDrop);
    const discountListDicounts = document.querySelector('.discount-list__discounts');
    discountListDicounts?.appendChild(promoDiv);
    promoDrop.addEventListener('click', () => {
      AppState.instance.state.promos = AppState.instance.state.promos.filter((item) => item.name !== promo.name);
      AppState.instance.state.app?.toBasket();
    });
  }
}

export default DiscountList;
