const service = require('../../dia_3/src/exercise1');

test('Testando chamada, retorno e quantas vezes a função randonNumber foi chamada', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
