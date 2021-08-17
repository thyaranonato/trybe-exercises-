const sum = require("../../dia_1/scr/funcSum");


describe('Função sum retorna a soma do parâmetro a com o b', () => {
  describe('A função sum', () => {
    test('Existe', () => {
      // assert.strictEqual(typeof sum, 'function');
      expect(typeof sum).toEqual('function');
    })
  });
});


// // Exercício 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// // Teste 1 - Teste se o retorno de sum(4, 5) é 9
// assert.strictEqual(sum(4, 5), 9);

// // Teste 2 - Teste se o retorno de sum(0, 0) é 0
// assert.strictEqual(sum(0, 0), 0);

// // Teste 3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// assert.throws(() => {
//   sum(4, '5');
// });

// // Teste 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
// assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/); 
