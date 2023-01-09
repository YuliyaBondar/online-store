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
    searchElement.value = AppState.instance.state.searchInput;
    searchElement.focus();
    searchElement.addEventListener('input', () => this.searchToy());
    const clearSearch = <HTMLElement>document.querySelector('.cross');
    clearSearch.addEventListener('click', () => {
      (<HTMLInputElement>searchElement).value = '';
      this.searchToy();
    })
  }

  render() {
    return `
      <div class="search__container">
        <input class="search" type="search" autocomplete="off" placeholder="Search" autofocus="undefined">
        <button class="cross"></button>
      </div>
    `;
  }

  searchToy() {
    let filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];
    const searchElement = <HTMLInputElement>document.querySelector('.search');
    filteredToysList = filteredToysList.filter((toyItem) => {
      const substring: string = (<HTMLInputElement>searchElement).value.toLowerCase();
      const toyName: string = toyItem.name.toLowerCase();
      const toyAgeFrom: string = toyItem.ageFrom.toString();
      const toyPrice: string = toyItem.price.toString();
      const toyCategory: string = toyItem.category.toLowerCase();
      const toyNumbOfDetails: string = toyItem.numbOfDetails.toString();
      const toySizeOfDetails: string = toyItem.sizeOfDetails.toLowerCase();
      const toyInterests: string = toyItem.interests.toString().toLowerCase();
      const toyDescription: string = toyItem.description.toLowerCase();
      const toyAmountOnStock: string = toyItem.amountOnStock.toString();
      return (
        toyName.includes(substring) ||
        toyAgeFrom.includes(substring) ||
        toyPrice.includes(substring) ||
        toyCategory.includes(substring) ||
        toyNumbOfDetails.includes(substring) ||
        toySizeOfDetails.includes(substring) ||
        toyInterests.includes(substring) ||
        toyDescription.includes(substring) ||
        toyAmountOnStock.includes(substring)
      );
    });
    AppState.instance.state.searchInput = searchElement.value;
    console.log(filteredToysList);
    AppState.instance.state.filteredToyList = filteredToysList;
    AppState.instance.state.app?.toStore();
  }
}
