import { Categories } from "./types";

export interface IComponent {
  render: () => string | Promise<string> | void | Promise<void>;
  addEvents: () => void;
}

export interface ISettings {
  chosenCategories: Categories;
}
