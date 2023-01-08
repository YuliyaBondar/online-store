import { Categories, LegoItem, ValueItems } from './types';
import '../styles/filter.css';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';
import { defaultSettings } from './constants';
import { LegoCategory } from './enums';

export class Filter implements IComponent {
  constructor() {
  }

  addEvents() {
    const categoryItems = document.querySelectorAll('.categoryItem');
    categoryItems.forEach((categoryItem, index) => {
      const currentKey: string = Object.values(LegoCategory)[index];
      if (defaultSettings.chosenCategories[currentKey as keyof Categories]) categoryItem.classList.add('active');
      categoryItem.addEventListener('click', () => {
        const currentValue: boolean = defaultSettings.chosenCategories[currentKey as keyof Categories];
        defaultSettings.chosenCategories[currentKey as keyof Categories] = !currentValue;
        categoryItem.classList.toggle('active');
        this.filterToys();
      });
    });
  }

  render() {
    const categoryItems = new Array(Object.keys(defaultSettings.chosenCategories).length).fill(null).map((_, index) => {
      const currentKey: string = Object.values(LegoCategory)[index];
      const categoryItem = `
      <div>
          <input type="checkbox" name="category" id="${currentKey}" class="categoryItem category_${currentKey}">
          <label for="${currentKey}">${currentKey}</label>
        </div>
    `;
      return categoryItem;
    });
    const categoryItemsString = categoryItems.join('');

    return `
      <h3>Categories</h3>
      <div class="category_container">
        ${categoryItemsString}
      </div>
    `;
  }

  filterToys() {
    const checkPropList = (props: ValueItems<boolean>): boolean => Boolean(Object.values(props).includes(true));
    let filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];
    filteredToysList = filteredToysList.filter((toyItem) => {
      if (checkPropList(defaultSettings.chosenCategories)) {
        const filteredPairs: Array<[string, boolean]> = Object.entries(defaultSettings.chosenCategories).filter(
          (pair) => pair[1]
        );
        return !!filteredPairs.find((pair) => pair[0] === toyItem.category);
      }
      return true;
    });
    console.log(filteredToysList);
  }
}
