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
        <div class="summary__searched"></div>
        <p>Promo for test: 'LEGO', '2023'</p>
      </div>
      <button class="summary__buy">Buy now</button>
      </div>
    </div>
    `;
  }

  async addEvents() {
    const summaryInputPromo = document.getElementsByClassName('summary__input-promo')[0];
    (<HTMLInputElement>summaryInputPromo).value = AppState.instance.state.inputPromo;
    const event = new Event('input');
    summaryInputPromo?.addEventListener('input', (e) => this.searchPromo(e));
    summaryInputPromo.dispatchEvent(event);
  }

  searchPromo(e: Event) {
    const summarySearched = document.getElementsByClassName('summary__searched')[0];
    let isPromo: boolean = false;
    AppState.instance.state.inputPromo = (<HTMLInputElement>e.target)?.value;
    promos.map((item) => {
      if (item.name === (<HTMLInputElement>e.target)?.value.toUpperCase()) {
        isPromo = true;
        const currentPromo = document.createElement('div');
        const currentPromoDescription = document.createElement('div');
        currentPromoDescription.innerHTML = `${item.descripton} - ${item.discount}%`;
        currentPromo.appendChild(currentPromoDescription);
        summarySearched?.appendChild(currentPromo);
        if (!(item.name in AppState.instance.state.promos)) {
          const addCurrentPromo = document.createElement('button');
          addCurrentPromo.innerHTML = `ADD`;
          addCurrentPromo.classList.add('summary__add-current-promo');
          addCurrentPromo.setAttribute('data-name', item.name);
          addCurrentPromo.addEventListener('click', () => {
            alert(`Вы добавили дисконт ${addCurrentPromo.getAttribute('data-name')}`);
          });
          summarySearched?.appendChild(addCurrentPromo);
        }
      }
    });
    if (!isPromo) {
      summarySearched.innerHTML = ``;
    }
  }
}

export default Summary;
