const sum = require("../../dia_1/scr/funcSum");


describe('A função sum', () => {
  test('Existe', () => {
    // assert.strictEqual(typeof sum, 'function');
    expect(typeof sum).toEqual('function');
  });

  test('O retorno sum(4, 5) é 9', () => {
    // assert.strictEqual(sum(4, 5), 9);
    expect(sum(4, 5)).toBe(9);
  });

  test('O retorno de sum(0, 0) é 0', () => {
    // assert.strictEqual(sum(0, 0), 0);
    expect(sum(0, 0)).toBe(0);
  });

  test('Lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    // assert.throws(() => sum(4, '5');
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('Lança mensagem de erro: "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    // assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/); 
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});
