import { AppState, appState } from './Store/AppState';
import { Basket } from './components/Basket';
import BasketPage from './components/BasketPage';
import DescriptionPage from './components/DescriptionPage';
import { LegoItem } from './components/types';

export const locationResolver = async (location: string, callerObj: LegoItem | Basket) => {
  switch (location) {
    case `#/products/${(<LegoItem>callerObj).id}`:
      await new DescriptionPage(<LegoItem>callerObj).render();
      break;
    case `#/basket`:
      await AppState.instance.state.app?.toBasket();
      break;
  }
};
