import { AppState, appState } from './Store/AppState';
import DescriptionPage from './components/DescriptionPage';
import Page404 from './components/Page404';
import { LegoItem } from './components/types';

export const locationResolver = async (location: string, option: string = '') => {
  const PAGE404 = new Page404().render();
  const units: string[] = location.split('/').filter((unit) => !!unit);

  console.log(units);
  switch (units.length) {
    case 0:
      await AppState.instance.state.app?.toStore();
      window.location.hash = '#/';
      break;
    case 1:
      if (units[0] === '#') {
        window.location.hash = '#/';
        AppState.instance.state.app?.toStore();
      } else {
        PAGE404;
      }
      break;
    case 2:
      if (units[0] === '#' && units[1] === 'basket') {
        if (option === 'design') {
          window.location.hash = '#/basket';
          await AppState.instance.state.app?.toBasketDesign();
        } else {
          window.location.hash = '#/basket';
          await AppState.instance.state.app?.toBasket();
        }
      } else {
        PAGE404;
      }
      break;
    case 3:
      if (units[0] === '#' && units[1] === 'products') {
        let product: LegoItem[] = appState.state.products.filter((item) => item.id === Number(units[2]));
        if (product.length !== 0) {
          window.location.hash = `#/products/${units[2]}`;
          const DESCRIPTION = new DescriptionPage(product[0]);
          await DESCRIPTION.render();
          await DESCRIPTION.addEvents();
        } else {
          PAGE404;
        }
      } else {
        PAGE404;
      }
      break;
    default: {
      PAGE404;
    }
  }
};
