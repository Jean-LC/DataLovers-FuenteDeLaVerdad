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
  it('does not return `noname` people ', () => {
    expect(showData(tryArrayforOther.films, "people")).not.toBe([{"noname": "Lulei", "age": "17"}]);
  });
  it('does not return `noname` vehicles ', () => {
    expect(showData(tryArrayforOther.films, "vehicles")).not.toBe([{"noname": "godKiller", "vehicleStats": "over9thousand"}]);
  });
  it('does not return `noname` locations ', () => {
    expect(showData(tryArrayforOther.films, "locations")).not.toBe([{"noname": "pagrizzzz", "climate": "Cold"}]);
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
  it('does not return `order` from Z-A ', () => {
    expect(orderAZ(tryArrayforOrder.films)).not.toBe([{ "name": "Zandra" }, { "name": "Abigail" }]);
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
  it('does not return `order` from A-Z ', () => {
    expect(orderZA(tryArrayforOrder.films)).not.toBe([{ "name": "Abigail" }, { "name": "Zandra" }]);
  });
});