import { showData, orderAZ, orderZA } from '../src/data.js';
import tryArrayforOther from './dataTest';
import tryArrayforOrder from './dataTestOrder';


// PROBAR LA FUNCIÓN DE FILTRADO
describe('show required Data', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns `characters`', () => {
    expect(showData(tryArrayforOther.films, "people")).toStrictEqual([{ "name": "pazuzu", "age": "15" }]);
  });
  it('returns `vehicles`', () => {
    expect(showData(tryArrayforOther.films, "vehicles")).toStrictEqual([{ "name": "krakazua", "vehicleStats": "low" }]);
  });
  it('returns `locations`', () => {
    expect(showData(tryArrayforOther.films, "locations")).toStrictEqual([{ "name": "londron", "climate": "foggy" }]);
  });
});


//PROBAR FUNCIÓN DE ORDENAR A-Z
describe('order A-Z', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns `order`', () => {
    expect(orderAZ(tryArrayforOrder.films)).toStrictEqual([{ "name": "Abigail" }, { "name": "Zandra" }]);
  });
});

//PROBAR FUNCIÓN DE ORDENAR Z-A
describe('order Z-A', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns `order`', () => {
    expect(orderZA(tryArrayforOrder.films)).toStrictEqual([{ "name": "Zandra" }, { "name": "Abigail" }]);
  });
});