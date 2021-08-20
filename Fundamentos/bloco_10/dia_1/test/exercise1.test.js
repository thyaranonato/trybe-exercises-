// Exercício 1 (Parte II) - Para as funções encode e decode crie os seguintes testes:
// 1.Teste se encode e decode são funções;
// 2.Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// 3.Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// 4.Teste se as demais letras/números não são convertidos para cada caso;
// 5.Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const { encode, decode } = require('../../dia_1/scr/exercise1');

describe('Testa as funções encode e decode', () => {
  test('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  test('encode é definida', () => {
    expect(encode).toBeDefined();
  });
  
  test('converte vogal "a" no número 1', () => {
    expect(encode('banana')).toEqual('b1n1n1');
  });

  test('converte vogal "e" no número 2', () => {
    expect(encode('mexe')).toEqual('m2x2');
  });

  test('converte vogal "i" no número 3', () => {
    expect(encode('bibi')).toEqual('b3b3');
  });

  test('converte vogal "o" no número 4', () => {
    expect(encode('vovo')).toEqual('v4v4');
  });

  test('converte vogal "u" no número 5', () => {
    expect(encode('xuxu')).toEqual('x5x5');
  });

  test('testando se retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('string').length).toEqual(6);
  });

  test('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  test('decode é definida', () => {
    expect(decode).toBeDefined();
  });
  
  test('converte número 1 na vogal "a"', () => {
    expect(decode('b1n1n1')).toEqual('banana');
  });

  test('converte número 2 na vogal "e"', () => {
    expect(decode('m2x2')).toEqual('mexe');
  });

  test('converte número 3 na vogal "i"', () => {
    expect(decode('b3b3')).toEqual('bibi');
  });

  test('converte número 4 na vogal "o"', () => {
    expect(decode('v4v4')).toEqual('vovo');
  });

  test('converte número 5 na vogal "u"', () => {
    expect(decode('x5x5')).toEqual('xuxu');
  });
  
  test('testando se retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('parametro').length).toEqual(9);
  });
});

