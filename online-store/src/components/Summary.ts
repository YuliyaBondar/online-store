import { AppState } from '../Store/AppState';
import { IComponent } from './interfaces';
import '../styles/summary.css';
import { promos } from './constants';

class Summary implements IComponent {
  legoItemCosts: number[] = [];
  summaryCost: number = 100;
  appliedPromo = [];

  constructor() {}
  async render() {
    return `
    <div class="basket-design__summary summary">
      <div class="summary__header">
        Summary
      </div>
      <div class="summary__items">
        <p>Products: ${AppState.countProducts()}</p>
        <p>Total: $${AppState.summaryCosts()}</p>
        <p>Total:</p>
        <div>
          <p>Applied codes</p>
        </div>
        <div>
          <input class="summary__input-promo">
        </div>
        <p>Promo for test: 'LEGO', '2023'</p>
      </div>
      <button class="summary__buy">Buy now</button>
      </div>
    </div>
    `;
  }
  async addEvents() {
    const summaryInputPromo = document.getElementsByClassName('summary__input-promo')[0];
    summaryInputPromo?.addEventListener('input', (e) => this.searchPromo(e));
  }

  searchPromo(e: Event) {
    promos.map((item) => {
      if (item.name === (<HTMLInputElement>e.target)?.value.toUpperCase()) {
        alert('Промокод найден!');
      }
    });
  }
}

export default Summary;
