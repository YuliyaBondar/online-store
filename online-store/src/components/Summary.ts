import { promos } from './constants';
import { IComponent } from './interfaces';
import DiscountList from './DiscountList';

import { AppState } from '../Store/AppState';

import '../styles/summary.css';

class Summary implements IComponent {
  discountList: DiscountList;
  constructor() {
    this.discountList = new DiscountList();
  }
  async render() {
    if (AppState.countProducts() === 0) return `<div class="basket-design__empty">No any products in cart</div>`;
    else
      return `
    <div class="basket-design__summary summary">
      <div class="summary__header">
        Summary
      </div>
      <div class="summary__items">
        <p>Products: ${AppState.countProducts()}</p>
        <p class=summary__total>Total: $${AppState.summaryCosts()}</p>
        <p class=summary__total-discount>Total:$${AppState.summaryWithSales()}</p>
        ${await this.discountList.render()}
        <div>
          <input class="summary__input-promo">
        </div>
        <div class="summary__searched"></div>
        <p class="summary__test-promo">Promo for test: 'LEGO', '2023'</p>
      </div>
      <button class="summary__buy">Buy now</button>
      </div>
    </div>
    `;
  }

  async addEvents() {
    const summaryInputPromo = document.querySelector('.summary__input-promo');
    (<HTMLInputElement>summaryInputPromo).value = AppState.instance.state.inputPromo;
    const event = new Event('input');
    summaryInputPromo?.addEventListener('input', (e) => this.searchPromo(e));
    summaryInputPromo?.dispatchEvent(event);
    await this.discountList.addEvents();
    this.renderWithSales();
  }

  searchPromo(e: Event) {
    const summarySearched = document.querySelector('.summary__searched');
    let isPromo: boolean = false;
    AppState.instance.state.inputPromo = (<HTMLInputElement>e.target)?.value;
    promos.map((item) => {
      if (item.name === (<HTMLInputElement>e.target)?.value.toUpperCase()) {
        isPromo = true;
        const currentPromo = document.createElement('div');
        currentPromo.classList.add('summary_current-promo');
        const currentPromoDescription = document.createElement('div');
        currentPromoDescription.innerHTML = `${item.description} - ${item.discount}%`;
        currentPromo.appendChild(currentPromoDescription);
        summarySearched?.appendChild(currentPromo);
        if (!(AppState.instance.state.promos.filter((promo) => promo.name === item.name).length > 0)) {
          const addCurrentPromo = document.createElement('button');
          addCurrentPromo.innerHTML = `ADD`;
          addCurrentPromo.classList.add('summary__add-current-promo');
          addCurrentPromo.setAttribute('data-name', item.name);
          addCurrentPromo.addEventListener('click', () => {
            AppState.instance.state.promos.push(item);
            if (summarySearched) summarySearched.innerHTML = ``;
            AppState.instance.state.app?.toBasket();
          });
          summarySearched?.appendChild(addCurrentPromo);
        }
      }
    });
    if (!isPromo) {
      if (summarySearched) summarySearched.innerHTML = ``;
    }
  }

  renderWithSales() {
    const discountList = document.querySelector('.discount-list');
    const summaryTotalDiscount = document.querySelector('.summary__total-discount');
    const summaryTotal = document.querySelector('.summary__total');
    if (AppState.instance.state.promos.length === 0) {
      (<HTMLElement>discountList).hidden = true;
      (<HTMLElement>summaryTotalDiscount).hidden = true;
      (<HTMLElement>summaryTotal)?.classList.remove('summary__total_decorated');
    } else {
      (<HTMLElement>discountList).hidden = false;
      (<HTMLElement>summaryTotalDiscount).hidden = false;
      (<HTMLElement>summaryTotal)?.classList.add('summary__total_decorated');
    }
  }
}

export default Summary;
