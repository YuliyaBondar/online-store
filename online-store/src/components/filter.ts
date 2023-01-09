import { Categories, LegoItem, Names, Sizes, ValueItems } from './types';
import '../styles/filter.css';
import { IComponent } from './interfaces';
import { AppState } from '../Store/AppState';
import { LegoCategory, LegoName, LegoSize } from './enums';

export class Filter implements IComponent {
  constructor() {}

  addEvents() {
    const categoryItems = document.querySelectorAll('.categoryItem');
    categoryItems.forEach((categoryItem, index) => {
      const currentKey: string = Object.values(LegoCategory)[index];
      if (AppState.instance.state.chosenCategories[currentKey as keyof Categories])
        categoryItem.classList.add('active');
      (<HTMLInputElement>categoryItem).checked =
        AppState.instance.state.chosenCategories[currentKey as keyof Categories];
      (<HTMLInputElement>categoryItem).focus();
      categoryItem.addEventListener('input', () => {
        const currentValue: boolean = AppState.instance.state.chosenCategories[currentKey as keyof Categories];
        AppState.instance.state.chosenCategories[currentKey as keyof Categories] = !currentValue;
        categoryItem.classList.toggle('active');
        AppState.instance.state.chosenCategories[currentKey as keyof Categories] = (<HTMLInputElement>(
          categoryItem
        )).checked;
        this.filterToys();
      });
    });

    const sizeItems = document.querySelectorAll('.sizeItem');
    sizeItems.forEach((sizeItem, index) => {
      const currentKey: string = Object.values(LegoSize)[index];
      if (AppState.instance.state.chosenSizes[currentKey as keyof Sizes]) sizeItem.classList.add('active');
      (<HTMLInputElement>sizeItem).checked = AppState.instance.state.chosenSizes[currentKey as keyof Sizes];
      (<HTMLInputElement>sizeItem).focus();
      sizeItem.addEventListener('input', () => {
        const currentValue: boolean = AppState.instance.state.chosenSizes[currentKey as keyof Sizes];
        AppState.instance.state.chosenSizes[currentKey as keyof Sizes] = !currentValue;
        sizeItem.classList.toggle('active');
        AppState.instance.state.chosenSizes[currentKey as keyof Sizes] = (<HTMLInputElement>sizeItem).checked;
        this.filterToys();
      });
    });

    const nameItems = document.querySelectorAll('.nameItem');
    nameItems.forEach((nameItem, index) => {
      const currentKey: string = Object.values(LegoName)[index];
      if (AppState.instance.state.chosenNames[currentKey as keyof Names]) nameItem.classList.add('active');
      (<HTMLInputElement>nameItem).checked = AppState.instance.state.chosenNames[currentKey as keyof Names];
      (<HTMLInputElement>nameItem).focus();
      nameItem.addEventListener('input', () => {
        const currentValue: boolean = AppState.instance.state.chosenNames[currentKey as keyof Names];
        AppState.instance.state.chosenNames[currentKey as keyof Names] = !currentValue;
        nameItem.classList.toggle('active');
        AppState.instance.state.chosenNames[currentKey as keyof Names] = (<HTMLInputElement>nameItem).checked;
        this.filterToys();
      });
    });

    const priceRegulator = document.querySelector('.price_regulator');
    (<HTMLInputElement>priceRegulator).value = AppState.instance.state.priceRange[1].toString();
    (<HTMLInputElement>priceRegulator).addEventListener('input', () => {
      AppState.instance.state.priceRange[1] = +(<HTMLInputElement>priceRegulator).value;
      this.filterToys();
    });

    const amountRegulator = document.querySelector('.amount_regulator');
    (<HTMLInputElement>amountRegulator).value = AppState.instance.state.amountRange[1].toString();
    (<HTMLInputElement>amountRegulator).addEventListener('input', () => {
      AppState.instance.state.amountRange[1] = +(<HTMLInputElement>amountRegulator).value;
      this.filterToys();
    });
  }

  render() {
    const categoryItems = new Array(Object.keys(AppState.instance.state.chosenCategories).length)
      .fill(null)
      .map((_, index) => {
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

    const sizeItems = new Array(Object.keys(AppState.instance.state.chosenSizes).length).fill(null).map((_, index) => {
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

    const nameItems = new Array(Object.keys(AppState.instance.state.chosenNames).length).fill(null).map((_, index) => {
      const currentKey: string = Object.values(LegoName)[index];
      const nameItem = `
      <div>
          <input type="checkbox" name="name" id="${currentKey}" class="nameItem name_${currentKey}">
          <label for="${currentKey}">${currentKey}</label>
        </div>
    `;
      return nameItem;
    });
    const nameItemsString = nameItems.join('');

    return `
      <h3>Category</h3>
      <div class="category_container">
        ${categoryItemsString}
      </div>
      <h3>Size</h3>
      <div class="size_container">
        ${sizeItemsString}
      </div>
      <h3>Name</h3>
      <div class="name_container">
        ${nameItemsString}
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
      if (checkPropList(AppState.instance.state.chosenCategories)) {
        const filteredPairs: Array<[string, boolean]> = Object.entries(AppState.instance.state.chosenCategories).filter(
          (pair) => pair[1]
        );
        return !!filteredPairs.find((pair) => pair[0] === toyItem.category);
      }
      return true;
    });

    filteredToysList = filteredToysList.filter((toyItem) => {
      if (checkPropList(AppState.instance.state.chosenSizes)) {
        const filteredPairs: Array<[string, boolean]> = Object.entries(AppState.instance.state.chosenSizes).filter(
          (pair) => pair[1]
        );
        return !!filteredPairs.find((pair) => pair[0] === toyItem.sizeOfDetails);
      }
      return true;
    });

    filteredToysList = filteredToysList.filter((toyItem) => {
      if (checkPropList(AppState.instance.state.chosenNames)) {
        const filteredPairs: Array<[string, boolean]> = Object.entries(AppState.instance.state.chosenNames).filter(
          (pair) => pair[1]
        );
        return !!filteredPairs.find((pair) => pair[0] === toyItem.name);
      }
      return true;
    });

    filteredToysList = filteredToysList.filter((toyItem) => {
      const priceGroup: Array<number> = [
        AppState.instance.state.priceRange[0],
        Number(toyItem.price),
        AppState.instance.state.priceRange[1],
      ];
      const countGroup: Array<number> = [
        AppState.instance.state.amountRange[0],
        Number(toyItem.amountOnStock),
        AppState.instance.state.amountRange[1],
      ];
      return [priceGroup, countGroup].every((group: Array<number>) =>
        group.every((value: number, i: number) => (i < group.length - 1 ? value <= group[i + 1] : true))
      );
    });

    AppState.instance.state.filteredToyList = filteredToysList;
    AppState.instance.state.app?.toStore();

    console.log(filteredToysList);
  }
}
