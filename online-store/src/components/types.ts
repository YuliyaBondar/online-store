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

export type Names = {
  FreightTrain: boolean,
  TrainStation: boolean,
  LunarResearchBase: boolean,
  LunarSpaceStation: boolean,
  MobileCrane: boolean,
  ExpressPassengerTrain: boolean,
  BarnFarmAnimals: boolean,
  FarmersMarketVan: boolean,
  LunarRovingVehicle: boolean,
  BathtubStuntBike: boolean,
  FireStation: boolean,
  TownCenter: boolean,
  AnnaAndOlafsCastleFun: boolean,
  ElsasCastleCourtyard: boolean,
  AnnaAndElsasFrozenWonderland: boolean,
  ElsaAndTheNokkStorybookAdventures: boolean,
  ElsasWagonAdventure: boolean,
  TheIceCastle: boolean,
  FrozenIceCastle: boolean,
  AnnasCastleCourtyard: boolean,
  Bookshop: boolean,
  HauntedHouse: boolean,
  SantasVisit: boolean,
  QueerEyeTheFab5Loft: boolean,
  Porsche911: boolean,
  NASAApollo11LunarLander: boolean,
  OptimusPrime: boolean,
  Colosseum: boolean,
  HighSpeedTrain: boolean,
  BackToTheFutureTimeMachine: boolean,
  RobotInventor: boolean,
  LEGOEducationBricQMotionPrimeSet: boolean,
  JeepWrangler: boolean,
  MaterialHandler: boolean,
  McLarenFormula1RaceCar: boolean,
  HeavydutyTowTruck: boolean,
  LamborghiniSianFKP37: boolean,
  FerrariDaytonaSP3: boolean,
  AppControlledCatD11Bulldozer: boolean,
  AppControlledTransformationVehicle: boolean,
  WildAnimalsOfEurope: boolean,
  NumberTrainLearnToCount: boolean,
  spaceShuttleMission: boolean,
  CarParkAndCarWash: boolean,
  FireEngine: boolean,
  SantasGingerbreadHouse: boolean,
  CodingExpress: boolean,
  AnimalTrain: boolean,
  WildAnimalsOfTheOcean: boolean,
  TruckTrackedExcavator: boolean,
}

export type ValueItems<T> = { [x: string]: T };
