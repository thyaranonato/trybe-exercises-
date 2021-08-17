const myFizzBuzz = require('../../dia_1/scr/myFizzBuzz');

describe('A função myFizzBuzz', () => {
  test('Quando recebe um número divisível por 3 e 5 tem o retorno esperado', () => {
    const expected = 'fizzbuzz';
    expect(myFizzBuzz(15)).toEqual(expected);
  }); 

  test('Quando recebe um número divisível por 3 tem o retorno esperado', () => {
    const expected = 'fizz';
    expect(myFizzBuzz(27)).toEqual(expected);
  }); 

  test('Quando recebe um número divisível por 5 tem o retorno esperado', () => {
    const expected = 'buzz';
    expect(myFizzBuzz(10)).toEqual(expected);
  });

  test('Quando recebe um número que não é divisível por 3 ou 5 tem o retorno esperado', () => {
    const expected = 22;
    expect(myFizzBuzz(22)).toEqual(expected);
  });

  test('Quando recebe um parâmetro que não é um número o retorno é o esperado', () => {
    const expected = false;
    expect(myFizzBuzz('10')).toEqual(expected);
  });
});
