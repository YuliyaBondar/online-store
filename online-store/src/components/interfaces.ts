import { Categories, Sizes } from "./types";

export interface IComponent {
  render: () => string | Promise<string> | void | Promise<void>;
  addEvents: () => void;
}

export interface ISettings {
  chosenCategories: Categories;
  chosenSizes: Sizes;
  priceRange: Array<number>;
  amountRange: Array<number>;
}
