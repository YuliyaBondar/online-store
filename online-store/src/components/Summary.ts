import { promos } from './constants';
import { IComponent } from './interfaces';

import { AppState } from '../Store/AppState';
import '../styles/summary.css';

class Summary implements IComponent {
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
