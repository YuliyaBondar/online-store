import { AppState } from '../Store/AppState';
import { IComponent } from './interfaces';
import '../styles/summary.css';

class Summary implements IComponent {
  constructor() {}
  async render() {
    return `
        <div class="basket-design__summary">
          <div>
            Summary
          </div>
          <div>
          <p>Products:</p>
          <p>Total:</p>
          <p>Total:</p>
          <div>
          <p>Applied codes</p>
          </div>
          <div>
          <input>
          </div>
          <p>Promo for test: 'LEGO', '2023'</p>
          </div>
          <button>Buy now</button>
          </div>
        </div>
      `;
  }
  async addEvents() {}
}

export default Summary;
