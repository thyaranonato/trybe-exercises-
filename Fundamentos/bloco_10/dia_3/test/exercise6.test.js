const exercise6 = require('../../dia_3/src/exercise6');

describe('Testando requisão à API', () => {
  exercise6.fetchDogPictures = jest.fn();
  afterEach(exercise6.fetchDogPictures.mockReset);

  test('testando requisição para o caso da Promisse ser resolvida', async () => {
    exercise6.fetchDogPictures.mockResolvedValue('request sucess');

    exercise6.fetchDogPictures();
    expect(exercise6.fetchDogPictures).toHaveBeenCalled();
    expect(exercise6.fetchDogPictures).toHaveBeenCalledTimes(1);
    await expect(exercise6.fetchDogPictures()).resolves.toBe('request sucess');
    expect(exercise6.fetchDogPictures).toHaveBeenCalledTimes(2);
  });

  test('Testando requisição para o caso da Promisse ser rejeitada', async () => {
    exercise6.fetchDogPictures.mockRejectedValue('request failed');

    expect(exercise6.fetchDogPictures).toHaveBeenCalledTimes(0);
    await expect(exercise6.fetchDogPictures()).rejects.toMatch('request failed');
    expect(exercise6.fetchDogPictures).toHaveBeenCalledTimes(1);
  });
});
