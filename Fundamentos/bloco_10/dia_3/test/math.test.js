const math = require('../../dia_3/src/math');
//jest.mock('../../dia_3/src/math'); 

// 1 - Faça o mock da funcão subtrair e teste sua chamada.
test('Testando chamada da função subtrair', () => { 
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
}); 

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
test('Testando chamada e retorno da função multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
test('Testando chamada, retorno e os parâmetros passados para função somar', async () => {
  const mockSomar = jest.spyOn(math, 'somar');
  mockSomar.mockResolvedValue(12);

  mockSomar(3, 9);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(3, 9);
  await expect(mockSomar(3, 9)).resolves.toBe(12);

});

// 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
test('Testando chamada, retorno, parâmetros e quantas vezes a função foi chamada', () => {
  const mockDividir = jest.spyOn(math, 'dividir');
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);  

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);  

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);  
});

// 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
test('Mock função subtrair de forma que possa restaurar implementação original', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair');
  mockSubtrair.mockImplementation((a, b) => a + b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(15, 5)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(15, 5);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(10);

  expect(mockSubtrair(15, 5)).toBe(10);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(15, 5);
});
