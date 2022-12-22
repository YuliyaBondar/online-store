import Home from './components/home';
import { LegoItem } from './components/types';

const dataSource = 'https://raw.githubusercontent.com/poznerrr/fakedb/main/db.json';

fetch(dataSource)
    .then((response) => response.json())
    .then((data) => {
        const app = new App(data);
        app.start();
    });

class App {
    data: Array<LegoItem>;

    constructor(data: Array<LegoItem>) {
        this.data = data;
    }

    async start() {
        const home = new Home(this.data);
        await home.render();
    }
}
