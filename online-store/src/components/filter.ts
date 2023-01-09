import { Categories, LegoItem, Sizes, ValueItems } from './types';
import '../styles/filter.css';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';
import { defaultSettings } from './constants';
import { LegoCategory, LegoSize } from './enums';

export class Filter implements IComponent {
  constructor() {}

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

    const sizeItems = document.querySelectorAll('.sizeItem');
    sizeItems.forEach((sizeItem, index) => {
      const currentKey: string = Object.values(LegoSize)[index];
      if (defaultSettings.chosenSizes[currentKey as keyof Sizes]) sizeItem.classList.add('active');
      sizeItem.addEventListener('click', () => {
        const currentValue: boolean = defaultSettings.chosenSizes[currentKey as keyof Sizes];
        defaultSettings.chosenSizes[currentKey as keyof Sizes] = !currentValue;
        sizeItem.classList.toggle('active');
        this.filterToys();
      });
    });

    const priceRegulator = document.querySelector('.price_regulator');
    (<HTMLInputElement>priceRegulator).value = defaultSettings.priceRange[1].toString();
    (<HTMLInputElement>priceRegulator).addEventListener('input', () => {
      defaultSettings.priceRange[1] = +(<HTMLInputElement>priceRegulator).value;
      this.filterToys();
    });

    const amountRegulator = document.querySelector('.amount_regulator');
    (<HTMLInputElement>amountRegulator).value = defaultSettings.amountRange[1].toString();
    (<HTMLInputElement>amountRegulator).addEventListener('input', () => {
      defaultSettings.amountRange[1] = +(<HTMLInputElement>amountRegulator).value;
      this.filterToys();
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

    const sizeItems = new Array(Object.keys(defaultSettings.chosenSizes).length).fill(null).map((_, index) => {
      const currentKey: string = Object.values(LegoSize)[index];
      const sizeItem = `
      <div>
          <input type="checkbox" name="size" id="${currentKey}" class="sizeItem size_${currentKey}">
          <label for="${currentKey}">${currentKey}</label>
        </div>
    `;
      return sizeItem;
    });
    const sizeItemsString = sizeItems.join('');

    return `
      <h3>Category</h3>
      <div class="category_container">
        ${categoryItemsString}
      </div>
      <h3>Size</h3>
      <div class="size_container">
        ${sizeItemsString}
      </div>
      <h3>Price</h3>
      <input type="range" value="1" min="7.99" max="1458.99" step="1" class="price_regulator">
      <h3>Amount</h3>
      <input type="range" value="1" min="1" max="8" step="1" class="amount_regulator">
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

    filteredToysList = filteredToysList.filter((toyItem) => {
      if (checkPropList(defaultSettings.chosenSizes)) {
        const filteredPairs: Array<[string, boolean]> = Object.entries(defaultSettings.chosenSizes).filter(
          (pair) => pair[1]
        );
        return !!filteredPairs.find((pair) => pair[0] === toyItem.sizeOfDetails);
      }
      return true;
    });

    filteredToysList = filteredToysList.filter((toyItem) => {
      const priceGroup: Array<number> = [
        defaultSettings.priceRange[0],
        Number(toyItem.price),
        defaultSettings.priceRange[1],
      ];
      const countGroup: Array<number> = [
        defaultSettings.amountRange[0],
        Number(toyItem.amountOnStock),
        defaultSettings.amountRange[1],
      ];
      return [priceGroup, countGroup].every((group: Array<number>) =>
        group.every((value: number, i: number) => (i < group.length - 1 ? value <= group[i + 1] : true))
      );
    });

    console.log(filteredToysList);
  }
}
