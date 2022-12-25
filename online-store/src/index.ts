import Store from './components/store';
import { LegoItem } from './components/types';
import './global.css';
import { appState } from './Store/AppState';

const dataSource = 'https://raw.githubusercontent.com/poznerrr/fakedb/main/db.json';

fetch(dataSource)
    .then((response) => response.json())
    .then((data) => {
        appState.state.products = data;
        const app = new App();
        app.start();
    });

class App {

    constructor() {
    }

    async start() {
        const store = new Store(appState);
        await store.render();
        await store.addEvents();
    }
}
