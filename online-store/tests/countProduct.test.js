const moduleState = require('../src/Store/AppState');

let state = new moduleState.AppState();
moduleState.AppState.instance.state.basket.orders = [
  { legoItem: 2, count: 10 },
  { legoItem: 3, count: 20 },
  { legoItem: 4, count: 30 },
];

test(`тест подсчёта продуктов`, () => {
  expect(moduleState.AppState.countProducts()).toBe(60);
});
