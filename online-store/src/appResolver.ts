import { AppState, appState } from './Store/AppState';
import { Basket } from './components/Basket';
import DescriptionPage from './components/DescriptionPage';
import { LegoItem } from './components/types';
export const locationResolver = async (location: string) => {
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
        console.log('404');
      }
      break;
    case 2:
      if (units[0] === '#' && units[1] === 'basket') {
        window.location.hash = '#/basket';
        await AppState.instance.state.app?.toBasket();
      } else {
        console.log('404');
      }
      break;
    case 3:
      if (units[0] === '#' && units[1] === 'products') {
        let product: LegoItem[] = appState.state.products.filter((item) => item.id === Number(units[2]));
        if (product.length !== 0) {
          window.location.hash = `#/products/${units[2]}`;
          await new DescriptionPage(product[0]).render();
        } else {
          console.log('404');
        }
      } else {
        console.log('404');
      }
      break;
    default: {
      console.log('404');
    }
  }
};
