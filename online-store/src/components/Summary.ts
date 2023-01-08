import { promos, cardsUrl } from './constants';
import { IComponent } from './interfaces';
import DiscountList from './DiscountList';

import { AppState } from '../Store/AppState';

import '../styles/summary.css';
import { locationResolver } from '../appResolver';

class Summary implements IComponent {
  discountList: DiscountList;
  isAllValid = true;
  isValidName: boolean = false;
  isValidNumber: boolean = false;
  isValidDelivery: boolean = false;
  isValidEmail: boolean = false;
  isValidCardNumber: boolean = false;
  isValidValid: boolean = false;
  isValidCVV: boolean = false;
  option: string;
  constructor(option: string = '') {
    this.discountList = new DiscountList();
    this.option = option;
  }
  async render() {
    if (AppState.countProducts() === 0) return `<div class="basket-design__empty">No any products in cart</div>`;
    else
      return `
    <div class="basket-design__summary summary">
      <div class="summary__header">
        Summary
      </div>
      <div class="summary__items">
        <p>Products: ${AppState.countProducts()}</p>
        <p class=summary__total>Total: $${AppState.summaryCosts()}</p>
        <p class=summary__total-discount>Total:$${AppState.summaryWithSales()}</p>
        ${await this.discountList.render()}
        <div>
          <input class="summary__input-promo" placeholder="INPUT PROMOCODE">
        </div>
        <div class="summary__searched"></div>
        <p class="summary__test-promo">Promo for test: 'LEGO', '2023'</p>
      </div>
      <button class="summary__buy">Buy now</button>
      </div>
    </div>
    <div class="basket-design__popap-wrapper basket-design__popap-wrapper_hidden">
    <div class="basket-design__buy-popap buy-popap">
    <div class="buy-popap__header">
      Personal Detail
    </div>
    <div class="buy-popap__name">
      <input class="buy-popap__name-input buy-popap__input" placeholder="Name">
      <p class="popap-error popap-error-name popap-error_hidden">error</p>
    </div>
    <div class="buy-popap__phone">
      <input class="buy-popap__phone-input buy-popap__input" placeholder="Phone number">
      <p class="popap-error popap-error-phone popap-error_hidden">error</p>
    </div>
    <div class="buy-popap__delivery">
      <input class="buy-popap__delivery-input buy-popap__input" placeholder="Delivery address">
      <p class="popap-error popap-error-delivery popap-error_hidden">error</p>
    </div>
    <div class="buy-popap__email">
      <input class="buy-popap__email-input buy-popap__input" placeholder="E-mail">
      <p class="popap-error popap-error-email popap-error_hidden">error</p>
    </div>
    <div class="buy-popap__header">
    Credit card details
    </div>
    <div class="buy-popap__card credit-card">
    <div class="credit-card__identity">
      <div class="credit-card__img-div"><img class="credit-card__img"></div>
      <input class="credit-card__number-input" placeholder="Card number">
    </div>
    <div class="credit-card__additional">
      <div class="credit-card__valid">
      <span>VALID:</span>
      <input class="credit-card__valid-input" placeholder="Valid Thru">
      </div>
      <div class="credit-card__cvv">
      <span>CVV:</span>
      <input class="credit-card__cvv-input" placeholder="Code" type="number"></div>
    </div>
    </div>
    <div class="buy-popap__card-errors">
    <p class="popap-error-card popap-error popap-error_hidden">Card number - Error</p>
    <p class="popap-error-valid popap-error popap-error_hidden">Card valid thru - Error</p>
    <p class="popap-error-cvv popap-error popap-error_hidden" >Card CVV - Error</p>
    </div>
    <button class="buy-popap__confirm">Confirm</button>
    </div>
    </div>
    `;
  }

  async addEvents() {
    const summaryInputPromo = document.querySelector('.summary__input-promo');
    if (summaryInputPromo) {
      (<HTMLInputElement>summaryInputPromo).value = AppState.instance.state.inputPromo;
    }
    const event = new Event('input');
    summaryInputPromo?.addEventListener('input', (e) => this.searchPromo(e));
    summaryInputPromo?.dispatchEvent(event);
    await this.discountList.addEvents();
    this.renderWithSales();

    const summaryBuy = document.querySelector('.summary__buy');
    summaryBuy?.addEventListener('click', () => {
      this.renderPopup();
    });

    const popapWrapper = document.querySelector('.basket-design__popap-wrapper');
    popapWrapper?.addEventListener('click', (e: Event) => {
      if (e.target && (<HTMLElement>e.target).classList.contains('basket-design__popap-wrapper'))
        (<HTMLElement>e.target).classList.toggle('basket-design__popap-wrapper_hidden');
    });

    const popapConfirm = document.querySelector('.buy-popap__confirm');
    popapConfirm?.addEventListener('click', () => {
      this.checkConfirm();
    });

    const inputCardNumber = document.querySelector('.credit-card__number-input');
    inputCardNumber?.addEventListener('input', (e: Event) => {
      this.changePaySystem(e);
    });
    inputCardNumber?.addEventListener('input', () => {
      const cardNumberError = document.querySelector('.popap-error-card');
      if ((<HTMLInputElement>inputCardNumber).value.length !== 16) {
        (<HTMLElement>cardNumberError).classList.remove('popap-error_hidden');
        this.isValidCardNumber = false;
      } else {
        (<HTMLElement>cardNumberError).classList.add('popap-error_hidden');
        this.isValidCardNumber = true;
      }
    });

    const inputName = document.querySelector('.buy-popap__name-input');
    inputName?.addEventListener('input', () => {
      const cardNameError = document.querySelector('.popap-error-name');
      const re = new RegExp('^[А-ЯA-Za-zа-я0-9-]*$');
      let names = (<HTMLInputElement>inputName).value.split(' ');
      names = names.map((item) => item.trim()).filter((item) => !!item);
      if (names.length < 2 || names.filter((item) => re.test(item) && item.length >= 3).length !== names.length) {
        (<HTMLElement>cardNameError).classList.remove('popap-error_hidden');
        this.isValidName = false;
      } else {
        (<HTMLElement>cardNameError).classList.add('popap-error_hidden');
        this.isValidName = true;
      }
    });

    const inputNumber = document.querySelector('.buy-popap__phone-input');
    inputNumber?.addEventListener('input', () => {
      const cardPhoneError = document.querySelector('.popap-error-phone');
      const re = new RegExp('^[+][0-9]{9,}$');
      if (!re.test((<HTMLInputElement>inputNumber).value)) {
        (<HTMLElement>cardPhoneError).classList.remove('popap-error_hidden');
        this.isValidNumber = false;
      } else {
        (<HTMLElement>cardPhoneError).classList.add('popap-error_hidden');
        this.isValidNumber = true;
      }
    });

    const inputDelivery = document.querySelector('.buy-popap__delivery-input');
    inputDelivery?.addEventListener('input', () => {
      const cardDeliveryError = document.querySelector('.popap-error-delivery');
      const re = new RegExp('^[A-ZА-Яa-zа-я0-9-]*$');
      let names = (<HTMLInputElement>inputDelivery).value.split(' ');
      names = names.map((item) => item.trim()).filter((item) => !!item);
      if (names.length < 3 || names.filter((item) => re.test(item) && item.length >= 5).length !== names.length) {
        (<HTMLElement>cardDeliveryError).classList.remove('popap-error_hidden');
        this.isValidDelivery = false;
      } else {
        (<HTMLElement>cardDeliveryError).classList.add('popap-error_hidden');
        this.isValidDelivery = true;
      }
    });

    const inputEmail = document.querySelector('.buy-popap__email-input');
    inputEmail?.addEventListener('input', () => {
      const cardEmailError = document.querySelector('.popap-error-email');
      const re = new RegExp('^[a-zA-Z0-9-.,]{2,}@[a-zA-Z]{2,}[.][a-zA-Z]{2,}$');
      if (!re.test((<HTMLInputElement>inputEmail).value)) {
        (<HTMLElement>cardEmailError).classList.remove('popap-error_hidden');
        this.isValidEmail = false;
      } else {
        (<HTMLElement>cardEmailError).classList.add('popap-error_hidden');
        this.isValidEmail = true;
      }
    });

    const inputCVV = document.querySelector('.credit-card__cvv-input');
    inputCVV?.addEventListener('input', () => {
      const cardCVVError = document.querySelector('.popap-error-cvv');
      const re = new RegExp('^[0-9]{3}$');
      if (!re.test((<HTMLInputElement>inputCVV).value)) {
        (<HTMLElement>cardCVVError).classList.remove('popap-error_hidden');
        this.isValidCVV = false;
      } else {
        (<HTMLElement>cardCVVError).classList.add('popap-error_hidden');
        this.isValidCVV = true;
      }
    });

    const inputValid = document.querySelector('.credit-card__valid-input');
    inputValid?.addEventListener('input', (e: Event) => {
      const re = new RegExp('^[0-9]{2}$');
      const cardValidError = document.querySelector('.popap-error-valid');
      if ((<HTMLInputElement>inputValid).value.length == 2) {
        if (re.test((<HTMLInputElement>inputValid).value)) {
          let separator = (<HTMLInputElement>inputValid).value;
          separator += '/';
          (<HTMLInputElement>inputValid).value = separator;
          (<HTMLInputElement>inputValid).textContent = separator;
        }
      } else if ((<HTMLInputElement>inputValid).value.length > 5) {
        (<HTMLInputElement>inputValid).value = (<HTMLInputElement>inputValid).value.slice(0, 5);
      }

      let numbers = (<HTMLInputElement>inputValid).value.split('/');
      numbers = numbers.map((item) => item.trim()).filter((item) => !!item);
      if (
        numbers.length !== 2 ||
        numbers.filter((item) => re.test(item)).length !== numbers.length ||
        Number(numbers[0]) > 12 ||
        Number(numbers[0]) < 1
      ) {
        (<HTMLElement>cardValidError).classList.remove('popap-error_hidden');
        this.isValidValid = false;
      } else {
        (<HTMLElement>cardValidError).classList.add('popap-error_hidden');
        this.isValidValid = true;
      }
    });
    await this.designNow();
  }

  searchPromo(e: Event) {
    const summarySearched = document.querySelector('.summary__searched');
    let isPromo: boolean = false;
    AppState.instance.state.inputPromo = (<HTMLInputElement>e.target)?.value;
    promos.map((item) => {
      if (item.name === (<HTMLInputElement>e.target)?.value.toUpperCase()) {
        isPromo = true;
        const currentPromo = document.createElement('div');
        currentPromo.classList.add('summary_current-promo');
        const currentPromoDescription = document.createElement('div');
        currentPromoDescription.innerHTML = `${item.description} - ${item.discount}%`;
        currentPromo.appendChild(currentPromoDescription);
        summarySearched?.appendChild(currentPromo);
        if (!(AppState.instance.state.promos.filter((promo) => promo.name === item.name).length > 0)) {
          const addCurrentPromo = document.createElement('button');
          addCurrentPromo.innerHTML = `ADD`;
          addCurrentPromo.classList.add('summary__add-current-promo');
          addCurrentPromo.setAttribute('data-name', item.name);
          addCurrentPromo.addEventListener('click', () => {
            AppState.instance.state.promos.push(item);
            if (summarySearched) summarySearched.innerHTML = ``;
            AppState.instance.state.app?.toBasket();
          });
          summarySearched?.appendChild(addCurrentPromo);
        }
      }
    });
    if (!isPromo) {
      if (summarySearched) summarySearched.innerHTML = ``;
    }
  }

  async renderWithSales() {
    const discountList = document.querySelector('.discount-list');
    const summaryTotalDiscount = document.querySelector('.summary__total-discount');
    const summaryTotal = document.querySelector('.summary__total');
    if (AppState.instance.state.promos.length === 0 && discountList) {
      (<HTMLElement>discountList).hidden = true;
      if (summaryTotalDiscount) (<HTMLElement>summaryTotalDiscount).hidden = true;
      (<HTMLElement>summaryTotal)?.classList.remove('summary__total_decorated');
    } else {
      if (discountList) (<HTMLElement>discountList).hidden = false;
      if (summaryTotalDiscount) (<HTMLElement>summaryTotalDiscount).hidden = false;
      (<HTMLElement>summaryTotal)?.classList.add('summary__total_decorated');
    }
  }

  async renderPopup() {
    const popapWrapper = document.querySelector('.basket-design__popap-wrapper');
    (<HTMLElement>popapWrapper).classList.toggle('basket-design__popap-wrapper_hidden');
  }

  checkConfirm() {
    this.isAllValid = true;
    this.booleanChecker(this.isValidName, '.popap-error-name');
    this.booleanChecker(this.isValidNumber, '.popap-error-phone');
    this.booleanChecker(this.isValidDelivery, '.popap-error-delivery');
    this.booleanChecker(this.isValidEmail, '.popap-error-email');
    this.booleanChecker(this.isValidCardNumber, '.popap-error-card');
    this.booleanChecker(this.isValidValid, '.popap-error-valid');
    this.booleanChecker(this.isValidCVV, '.popap-error-cvv');

    const popap = document.querySelector('.basket-design__buy-popap');
    if (this.isAllValid) {
      (<HTMLElement>popap).innerHTML = `Congrats. Your buy is succesfull`;
      setTimeout(() => {
        AppState.instance.state.promos = [];
        AppState.instance.state.basket.orders = [];
        AppState.instance.saveLocalStorageOrders();
        locationResolver('#/');
      }, 5000);
    }
  }

  booleanChecker(name: boolean, p: string): void {
    if (!name) {
      this.isAllValid = false;
      const parag = document.querySelector(p);
      (<HTMLElement>parag).classList.remove('popap-error_hidden');
    }
  }

  changePaySystem(e: Event) {
    const cardImg = document.querySelector('.credit-card__img');
    switch ((<HTMLInputElement>e.target).value[0]) {
      case '3':
        (<HTMLImageElement>cardImg).src = cardsUrl.americanExpress;
        break;
      case '4':
        (<HTMLImageElement>cardImg).src = cardsUrl.visa;
        break;
      case '5':
        (<HTMLImageElement>cardImg).src = cardsUrl.masterCard;
        break;
      default:
        (<HTMLImageElement>cardImg).src = ``;
        break;
    }
  }

  async designNow() {
    setTimeout(() => {
      if (this.option === 'design') {
        this.renderPopup();
      }
    }, 300);
  }
}

export default Summary;
