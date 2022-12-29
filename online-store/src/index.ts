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
    const app = new App();
    AppState.instance.state.app = app;
    app.start();
  });

export class App {
  constructor() {}

  async start() {
    const store = new Store();
    await store.render();
    await store.addEvents();
  }

  async toBasket() {
    const basketPage = new BasketPage();
    await basketPage.render();
    await basketPage.addEvents();
  }
}

export default App;
