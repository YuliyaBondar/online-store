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
      const searchElement = <HTMLInputElement>document.querySelector('.search');
      AppState.instance.state.searchInput = searchElement.value;
      //this.searchToy();
      locationResolver(`#/?search=${AppState.instance.state.searchInput}`);
    });
    const clearSearch = <HTMLElement>document.querySelector('.cross');
    clearSearch.addEventListener('click', () => {
      (<HTMLInputElement>searchElement).value = '';
      AppState.instance.state.searchInput = searchElement.value;
      //this.searchToy();
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

  /*searchToy() {
    let filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];
    const searchElement = <HTMLInputElement>document.querySelector('.search');
    AppState.instance.state.searchInput = searchElement.value;
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
  }*/
}
