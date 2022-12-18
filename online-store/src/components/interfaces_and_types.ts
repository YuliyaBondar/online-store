export type legoItem = {
  id : number;
  name: string;
  ageFrom: number; /* можно использовать в фильтре */
  price: number;  /*можно использовать в фильтре */
  collection: string; /* можно использовать в фильтре [City, Classic, Creator, DC, Friends, Duplo etc.]*/
  numbOfDetails: number; /*можно использовать в фильтре*/
  sizeOfDetails: string ; /* можно использовать в фильтре [Small, Large] */
  interests : string[]; /*можно использовать в фильтре [Cars, Animals, Dragons, Space, Trains, Sports, etc.]*/
  description: string;
  amountOnStock: number;
}