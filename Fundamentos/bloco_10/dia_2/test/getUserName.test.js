// Exercício 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const { users, findUserById, getUserName } = require('../../dia_2/src/getUserName');

describe('getUserName - Promise', () => {
  describe('quando id do usuário existe', () => {
    it('retorna o nome do usuário', () => {
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
    }); 
  });

  describe('quando id do usuário não existe', () => {
    it('retorna erro', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
      expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});


// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('getUserName - async/await', () => {
  describe('quando id do usuário existe', () => {
    it('retorna o nome do usuário', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');;
    });
  });

  describe('quando id do usuário não existe', () => {
    it('retorna erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
});
