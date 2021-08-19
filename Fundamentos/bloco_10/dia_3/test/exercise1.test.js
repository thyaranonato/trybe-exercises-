const exercise1 = require('../../dia_3/src/exercise1');

test('Testando chamada, retorno e quantas vezes a função randonNumber foi chamada', () => {
  exercise1.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercise1.randomNumber()).toBe(10);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
});

// Exercício 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
test('Testando chamada, retorno e quantas vezes a função randonNumber foi chamada', () => {
  exercise1.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(exercise1.randomNumber(20, 5)).toBe(4);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise1.randomNumber).toHaveBeenCalledWith(20, 5);
});


// Exercício 3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
describe('Testando implementações', () => {
  test('Mock função que recebe 3 parâmetros e retorna sua multiplicação', () => {
    exercise1.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(exercise1.randomNumber(2, 5, 6)).toBe(60);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(2, 5, 6);    
  });

  test('Mock função que recebe 1 parâmetro e retorna o seu dobro', () => {
    exercise1.randomNumber.mockReset();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(0);

    exercise1.randomNumber.mockImplementation(a => a * 2);
    expect(exercise1.randomNumber(10)).toBe(20);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(10);  
  });
});
