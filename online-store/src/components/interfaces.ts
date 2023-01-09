import { Categories, Names, Sizes } from "./types";

export interface IComponent {
  render: () => string | Promise<string> | void | Promise<void>;
  addEvents: () => void;
}

export interface ISettings {
  chosenCategories: Categories;
  chosenSizes: Sizes;
  chosenNames: Names;
  priceRange: Array<number>;
  amountRange: Array<number>;
}
