const { obj3, obj2, obj1 } = require('../../dia_1/scr/compareObj');

describe('Comparando dois objetos para ver se são idênticos ou não', () => {
  test('Objeto 1 é igual ao objeto 2', () => {
    expect(obj1).toEqual(obj2);
  }); 

  test('Objeto 1 é igual ao objeto 2', () => {
    expect(obj1).not.toEqual(obj3);
  }); 

  test('Objeto 1 é igual ao objeto 2', () => {
    expect(obj2).not.toEqual(obj3);
  }); 
});
