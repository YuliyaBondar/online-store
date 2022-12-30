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
};
