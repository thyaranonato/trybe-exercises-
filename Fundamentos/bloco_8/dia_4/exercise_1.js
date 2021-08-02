// Exercício 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return arrays.reduce((acc, currentValue) => acc.concat(currentValue), [])
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
