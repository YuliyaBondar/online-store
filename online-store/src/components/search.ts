import { LegoItem } from './types';
import '../styles/search.css';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';

export class Search implements IComponent {
  // products: LegoItem[] = [];
  constructor() {
    // this.products = AppState.instance.state.products;
  }

  addEvents() {
    const searchElement = <HTMLInputElement>document.querySelector('.search');
    searchElement.addEventListener('click', () => this.searchToy());
  }

  render() {
    return `
      <div class="search__container">
        <input class="search" type="search" autocomplete="off" placeholder="Поиск" autofocus="undefined">
        <button class="cross"></button>
      </div>
    `;
  }

  searchToy() {
    let filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];
    const searchElement = <HTMLInputElement>document.querySelector('.search');
    filteredToysList = filteredToysList.filter((toyItem) => {
      const substring: string = (<HTMLInputElement>searchElement).value.toUpperCase();
      const toyName: string = toyItem.name.toUpperCase();
      return toyName.includes(substring);
    });
    console.log(filteredToysList)
  }
}
