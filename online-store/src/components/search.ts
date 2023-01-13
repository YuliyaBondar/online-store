import { LegoItem } from './types';
import '../styles/search.css';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';
import { locationResolver } from '../appResolver';

export class Search implements IComponent {
  constructor() {}

  addEvents() {
    const searchElement = <HTMLInputElement>document.querySelector('.search');
    searchElement.value = AppState.instance.state.searchInput;
    searchElement.focus();
    searchElement.addEventListener('input', () => {
      AppState.instance.state.searchInput = searchElement.value;
      locationResolver(`#/?search=${AppState.instance.state.searchInput}`);
    });
    const clearSearch = <HTMLElement>document.querySelector('.cross');
    clearSearch.addEventListener('click', () => {
      (<HTMLInputElement>searchElement).value = '';
      AppState.instance.state.searchInput = searchElement.value;
      locationResolver(`#/`);
    });
  }

  render() {
    return `
      <div class="search__container">
        <input class="search" type="search" autocomplete="off" placeholder="Search product" autofocus="undefined">
        <button class="cross"></button>
      </div>
    `;
  }
}
