const exercise5 = require('../../dia_3/src/exercise5');

describe('Testando implementações', () => {
  test('mock função para receber uma string e retornar em caixa baixa', () => {
    const mockUppercase = jest.spyOn(exercise5, 'uppercase')
    .mockImplementation(a => a.toLowerCase());

    expect(mockUppercase('TESTE')).toBe('teste');
    expect(mockUppercase).toHaveBeenCalled();
    expect(mockUppercase).toHaveBeenCalledTimes(1);
    expect(mockUppercase).toHaveBeenCalledWith('TESTE');

    exercise5.uppercase.mockRestore();

    expect(exercise5.uppercase('teste')).toBe( 'TESTE');
  });
});
