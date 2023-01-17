import { AppState, appState } from './Store/AppState';
import DescriptionPage from './components/DescriptionPage';
import Page404 from './components/Page404';
import { LegoItem } from './components/types';

export const locationResolver = async (location: string, option = '') => {
  const PAGE404 = new Page404().render();
  const units: string[] = location.split('/').filter((unit) => !!unit);

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
      } else if (units[0] === '#' && units[1].startsWith('?')) {
        let parametres = units[1]
          .slice(1)
          .split('&')
          .map((item) => item.split('='));
        parametres = parametres.filter((item) => item[1].length > 0);
        if (parametres.length > 0) {
          let filterhash: string[] = [];
          let filteredToysList: Array<LegoItem> = [...AppState.instance.state.products];
          parametres.map((item) => {
            if (item[0] === 'search') {
              filteredToysList = filteredToysList.filter((toyItem) => {
                const substring: string = item[1].toLowerCase();
                const toyName: string = toyItem.name.toLowerCase();
                const toyAgeFrom: string = toyItem.ageFrom.toString();
                const toyPrice: string = toyItem.price.toString();
                const toyCategory: string = toyItem.category.toLowerCase();
                const toyNumbOfDetails: string = toyItem.numbOfDetails.toString();
                const toySizeOfDetails: string = toyItem.sizeOfDetails.toLowerCase();
                const toyInterests: string = toyItem.interests.toString().toLowerCase();
                const toyDescription: string = toyItem.description.toLowerCase();
                const toyAmountOnStock: string = toyItem.amountOnStock.toString();
                return (
                  toyName.includes(substring) ||
                  toyAgeFrom.includes(substring) ||
                  toyPrice.includes(substring) ||
                  toyCategory.includes(substring) ||
                  toyNumbOfDetails.includes(substring) ||
                  toySizeOfDetails.includes(substring) ||
                  toyInterests.includes(substring) ||
                  toyDescription.includes(substring) ||
                  toyAmountOnStock.includes(substring)
                );
              });

              filterhash.push(`${item[0]}=${item[1]}`);
            }

            if (item[0] === 'sort') {
              filterhash.push(`${item[0]}=${item[1]}`);
              // AppState.instance.state.sortKey = item[1];
              filteredToysList.sort((a, b) => {
                switch (item[1]) {
                  case 'nameUp':
                    return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
                  case 'nameDown':
                    return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1;
                  case 'priceUp':
                    return +a.price - +b.price;
                  case 'priceDown':
                    return +b.price - +a.price;
                  default:
                    return 0;
                }
              });
            }
            AppState.instance.state.filteredToyList = filteredToysList;
          });

          AppState.instance.state.app?.toStore();
          window.location.hash = `#/?${filterhash.join('&')}`;
        } else {
          AppState.instance.state.filteredToyList = AppState.instance.state.products;

          AppState.instance.state.app?.toStore();
          window.location.hash = '#/';
        }
      } else {
        PAGE404;
      }
      break;
    case 3:
      if (units[0] === '#' && units[1] === 'products') {
        const product: LegoItem[] = appState.state.products.filter((item) => item.id === Number(units[2]));
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
