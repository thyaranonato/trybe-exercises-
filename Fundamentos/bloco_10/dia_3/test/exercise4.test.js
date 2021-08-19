const { uppercase, firstLetter, concatStrings } = require('../src/exercise4');
jest.mock('../../dia_3/src/exercise4');

describe('Testando implementações', () => {
  test('mock função para receber uma string e retornar em caixa baixa', () => {
    uppercase.mockImplementation(a => a.toLowerCase());

    expect(uppercase('TESTE')).toBe('teste');
    expect(uppercase).toHaveBeenCalled();
    expect(uppercase).toHaveBeenCalledTimes(1);
    expect(uppercase).toHaveBeenCalledWith('TESTE');
  });

  test('mock função que recebeu uma string e retorna a última letra', () => {
    firstLetter.mockImplementation(a => a.charAt(a.length -1));

    expect(firstLetter('letter')).toBe('r');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith('letter');
  });

  test('mock função que recebeu 3 strings e as concatena', () => {
    concatStrings.mockImplementation((a, b, c) => a.concat(b, c));

    expect(concatStrings('tes', 'tan', 'do')).toBe('testando');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('tes', 'tan', 'do');
  });
});
