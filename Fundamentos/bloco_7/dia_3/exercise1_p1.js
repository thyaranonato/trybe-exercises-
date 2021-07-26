const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste 1
const expected = sum(4, 5);

assert.strictEqual(expected, 9, 'Quatro mais cinco é igual a nove');

// Teste 2

