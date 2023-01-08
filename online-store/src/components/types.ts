export type LegoItem = {
  id: number;
  name: string;
  ageFrom: number;
  price: number;
  category: string;
  numbOfDetails: number;
  sizeOfDetails: string;
  interests: string[];
  description: string;
  amountOnStock: number;
  urlImage: string[];
};

export type Order = {
  legoItem: number;
  count: number;
};

export type Promo = {
  name: string;
  discount: number;
  description: string;
};

export type Categories = {
  city: boolean,
  duplo: boolean,
  technic: boolean,
  frozen: boolean,
  creator: boolean,
}

export type Sizes = {
  small: boolean,
  large: boolean,
}

export type ValueItems<T> = { [x: string]: T };
