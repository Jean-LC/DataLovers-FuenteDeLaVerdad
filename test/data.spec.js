import { showData, orderAZ, orderZA } from '../src/data.js';

// DATA PARA PROBAR FILTROS
const tryArrayforOther = [
  {
    "name": "jojo",
    "type": "movie",
    "people": [
      {
        "name": "pazuzu",
        "age": "15"
      }],
    'vehicles': [
      {
        "noname": "godKiller",
        "vehicleStats": "over9thousand"
      }],
    'locations': [
      {
        "noname": "pagrizzzz",
        "climate": "Cold"
      }
    ]
  },
  {
    "noname": "jojo",
    "type": "nomovie",
    "people": [{
      "noname": "Lulei",
      "age": "17"
    }], 'vehicles': [
      {
        "name": "krakazua",
        "vehicleStats": "low"
      }],
    'locations': [
      {
        "name": "londron",
        "climate": "foggy"
      }
    ]

  }]

// PROBAR LA FUNCIÓN DE FILTRADO
describe('show required Data', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns `characters`', () => {
    expect(showData(tryArrayforOther, "people")).toStrictEqual([{ "name": "pazuzu", "age": "15" }]);
  });
  it('returns `vehicles`', () => {
    expect(showData(tryArrayforOther, "vehicles")).toStrictEqual([{ "name": "krakazua", "vehicleStats": "low" }]);
  });
  it('returns `locations`', () => {
    expect(showData(tryArrayforOther, "locations")).toStrictEqual([{ "name": "londron", "climate": "foggy" }]);
  });
});

//DATA PARA PROBAR FUNCIÓN DE ORDENADO
const tryArrayforOrder = [
  {
    "name": "Zandra"
  },
  {
    "name": "Abigail"
  }
]

//PROBAR FUNCIÓN DE ORDENAR A-Z
describe('order A-Z', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns `order`', () => {
    expect(orderAZ(tryArrayforOrder)).toStrictEqual([{ "name": "Abigail" }, { "name": "Zandra" }]);
  });
});

//PROBAR FUNCIÓN DE ORDENAR Z-A
describe('order Z-A', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns `order`', () => {
    expect(orderZA(tryArrayforOrder)).toStrictEqual([{ "name": "Zandra" }, { "name": "Abigail" }]);
  });
});