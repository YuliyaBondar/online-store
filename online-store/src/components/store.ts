import { LegoItem } from './types';
import '../styles/store.css';

class Store {
    data: Array<LegoItem>;

    constructor(data: Array<LegoItem>) {
        this.data = data;
    }

    async render() {
        document.body.innerHTML = `
        <header class="header">
          <nav class="nav">
            <img class="logo" src="" alt="logo">
          </nav>          
        </header>
        <main class="main"></main>
        <footer class="footer">
          <div class="github-links">
            <img class="footer__svg" src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/github.svg" alt="rs_school_js">
            <a href="https://github.com/YuliyaBondar">YuliyaBondar</a>
            <a href="https://github.com/poznerrr">poznerrr</a>
          </div>          
          <p>2022</p>  
          <a href="https://rs.school/js/"><img class="footer__svg" src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/rss.svg" alt="rs_school_js"></a> 
        </footer>
      `;
    }
}

export default Store;
