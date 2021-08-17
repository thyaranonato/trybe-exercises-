const myRemoveWithoutCopy = require('../../dia_1/scr/myRemoveWithoutCopy');

describe('A função myRemoveWithoutCopy', () => {
  test('Quando chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
    const expected = [1, 2, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual(expected);
  });  

  test('Quando chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
    const expected = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual(expected);
  });

  test('Quando chamada, retorna se o array passado por parâmetro sofreu alterações', () => {
    // assert.strictEqual(myArray.length, 3);
    const myArray = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(myArray, 1)).toEqual(myArray);
  });

  test('Quando chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual(expected);
  });
});
