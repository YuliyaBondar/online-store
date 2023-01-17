import { AppState } from '../Store/AppState';

import { LegoItem } from './types';
import { IComponent } from './interfaces';
import { sortOptionsEnum } from './enums';

import '../styles/sort.css';

export class Sort implements IComponent {
  constructor() {}

  addEvents() {
    const sortSelect = document.querySelector('.sort__select');
    (<HTMLElement>sortSelect).addEventListener('change', (e: Event) => {
      AppState.instance.state.sortKey = (<HTMLSelectElement>e.target).value;
      this.sortToy();
      const options = document.querySelectorAll('.sort__option');
      options.forEach((item) => {
        (<HTMLElement>item).removeAttribute('selected');
        if (item.getAttribute('value') === AppState.instance.state.sortKey)
          (<HTMLElement>item).setAttribute('selected', 'selected');
      });
      (<HTMLElement>sortSelect).setAttribute('value', `${AppState.instance.state.sortKey}`);
    });
  }

  render() {
    const sortItems = new Array(Object.entries(sortOptionsEnum).length).fill(null).map((_, index) => {
      const sortItem = `
        <option class="sort__option" value="${Object.entries(sortOptionsEnum)[index][0]}">${
        Object.entries(sortOptionsEnum)[index][1]
      }</option>
      `;
      return sortItem;
    });
    const sortItemsString = sortItems.join('');

    return `
      <div class="sort__container">
        <select class="sort__select">
          <option class="sort__option" value="sort-title" selected="selected" disabled>Sort options:</option>
          ${sortItemsString}
        </select>
      </div>
    `;
  }

  sortToy() {
    const filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];

    filteredToysList.sort((a, b) => {
      switch (AppState.instance.state.sortKey) {
        case 'nameUp':
          return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
        case 'nameDown':
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1;
        case 'priceUp':
          return +a.price - +b.price;
        case 'priceDown':
          return +b.price - +a.price;
        default:
          return 0;
      }
    });
    
    AppState.instance.state.filteredToyList = filteredToysList;
    AppState.instance.state.app?.toStore();
  }
}
