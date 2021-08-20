// Exercício 6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);

      if (result) {
        return resolve(result);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);

      if (listAnimals.length > 0) {
        return resolve(listAnimals);
      }

      return reject(new Error('Nenhum animal encontrado!'));
    }, 100);
  })
);

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(findAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(findAnimalByAge(4)).rejects
        .toEqual(new Error('Nenhum animal encontrado!'));
    });
  });
});
