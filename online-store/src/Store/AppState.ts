import { Basket } from '../components/Basket';
import { Filter } from '../components/filter';
import { Search } from '../components/search';
import { Sort } from '../components/sort';

import { IState } from './IState';

const DEFAULT_STATE: IState = {
  app: null,
  store: null,
  basket: new Basket(),
  search: new Search(),
  filter: new Filter(),
  sort: new Sort(),
  products: [],
  promos: [],
  inputPromo: '',
  filteredToyList: [],
  searchInput: '',
  chosenCategories: {
    city: false,
    duplo: false,
    technic: false,
    frozen: false,
    creator: false,
  },
  chosenSizes: {
    small: false,
    large: false,
  },
  chosenNames: {
    FreightTrain: false,
    TrainStation: false,
    LunarResearchBase: false,
    LunarSpaceStation: false,
    MobileCrane: false,
    ExpressPassengerTrain: false,
    BarnFarmAnimals: false,
    FarmersMarketVan: false,
    LunarRovingVehicle: false,
    BathtubStuntBike: false,
    FireStation: false,
    TownCenter: false,
    AnnaAndOlafsCastleFun: false,
    ElsasCastleCourtyard: false,
    AnnaAndElsasFrozenWonderland: false,
    ElsaAndTheNokkStorybookAdventures: false,
    ElsasWagonAdventure: false,
    TheIceCastle: false,
    FrozenIceCastle: false,
    AnnasCastleCourtyard: false,
    Bookshop: false,
    HauntedHouse: false,
    SantasVisit: false,
    QueerEyeTheFab5Loft: false,
    Porsche911: false,
    NASAApollo11LunarLander: false,
    OptimusPrime: false,
    Colosseum: false,
    HighSpeedTrain: false,
    BackToTheFutureTimeMachine: false,
    RobotInventor: false,
    LEGOEducationBricQMotionPrimeSet: false,
    JeepWrangler: false,
    MaterialHandler: false,
    McLarenFormula1RaceCar: false,
    HeavydutyTowTruck: false,
    LamborghiniSianFKP37: false,
    FerrariDaytonaSP3: false,
    AppControlledCatD11Bulldozer: false,
    AppControlledTransformationVehicle: false,
    WildAnimalsOfEurope: false,
    NumberTrainLearnToCount: false,
    spaceShuttleMission: false,
    CarParkAndCarWash: false,
    FireEngine: false,
    SantasGingerbreadHouse: false,
    CodingExpress: false,
    AnimalTrain: false,
    WildAnimalsOfTheOcean: false,
    TruckTrackedExcavator: false,
  },
  priceRange: [7.99, 1458.99],
  amountRange: [1, 8],
  sortKey: '',
};

export class AppState {
  static isExist = false;
  static instance: AppState;

  state = DEFAULT_STATE;

  constructor() {
    this.state.basket.orders = localStorage.orders ? JSON.parse(localStorage.orders) : this.state.basket.orders;
    if (AppState.isExist) {
      return AppState.instance;
    }

    AppState.isExist = true;
    AppState.instance = this;
  }

  static countProducts = () => {
    return this.instance.state.basket.orders.reduce((acc, prev) => acc + prev.count, 0);
  };

  static summaryCosts = () => {
    const legoOrdersMoney: number[] = [];
    const orders = this.instance.state.basket.orders;
    orders.forEach((order) => {
      this.instance.state.products.filter((product) => {
        if (product.id === order.legoItem) legoOrdersMoney.push(product.price * order.count);
      });
    });
    return legoOrdersMoney.reduce((acc, prev) => acc + prev, 0).toFixed(2);
  };

  static summaryWithSales = () => {
    return (
      Number(this.summaryCosts()) -
      (Number(this.summaryCosts()) *
        this.instance.state.promos.map((item) => item.discount).reduce((acc, prev) => acc + prev, 0)) /
        100
    ).toFixed(2);
  };

  saveLocalStorageOrders() {
    localStorage.orders = JSON.stringify(this.state.basket.orders);
  }
}

export const appState = new AppState();
