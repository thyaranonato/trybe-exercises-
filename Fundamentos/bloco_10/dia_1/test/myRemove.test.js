const myRemove = require('../../dia_1/scr/myRemove');

describe('A função myRemove', () => {
  test('É uma função', () => {
    // assert.strictEqual(typeof myRemove, 'function');
    expect(typeof myRemove).toEqual('function');
  });

  // Source = https://jestjs.io/pt-BR/docs/expect#expectarraycontainingarray
  test('Quando chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
    const expected = [1, 2, 4];
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expected);
  });

  // Source: https://jestjs.io/pt-BR/docs/expect#expectnotarraycontainingarray
  test('Quando chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    // assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(expected);
  });

  test('Quando chamada, retorna se o array passado por parâmetro não sofreu alterações', () => {
    // assert.deepStrictEqual(myArray, [2, 4, 6, 8]);
    const myArray = [2, 4, 6, 8];
    const expected = [2, 4, 6, 8];
    expect(myRemove(myArray)).toEqual(expected);
  });

  test('Quando chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expected);
  });
});
