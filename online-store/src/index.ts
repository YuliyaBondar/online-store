import { locationResolver } from './appResolver';
import BasketPage from './components/BasketPage';
import Store from './components/store';
import { LegoItem } from './components/types';
import './global.css';
import { AppState, appState } from './Store/AppState';

const dataSource = 'https://raw.githubusercontent.com/poznerrr/fakedb/main/db.json';

fetch(dataSource)
  .then((response) => response.json())
  .then((data) => {
    AppState.instance.state.products = data;
    AppState.instance.state.filteredToyList = data;
    const app = new App();
    AppState.instance.state.app = app;
    app.start();
  });

export class App {
  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      locationResolver(hash);
    });
  }

  constructor() {}

  async start() {
    const hash = window.location.hash;
    locationResolver(hash);
    this.enableRouteChange();
  }

  async toStore() {
    const store = new Store();
    AppState.instance.state.store = store;
    await store.render();
    await store.addEvents();
  }

  async toBasket() {
    const basketPage = new BasketPage();
    await basketPage.render();
    await basketPage.addEvents();
  }

  async toBasketDesign() {
    const basketPage = new BasketPage('design');
    await basketPage.render();
    await basketPage.addEvents();
  }
}

export default App;
