const fs = require('fs');
const { expect } = require('chai');

const escreveArquivo = require('./escreveArquivo');

describe('Executa a função "escreveArquivo"', () => {
  describe('a resposta', () => {
    it('é uma string', () => {
      const resposta = escreveArquivo('arquivo.txt', 'hello, world!');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escreveArquivo('arquivo.txt', 'hello, world!');

      expect(resposta).to.be.equals('ok');
    });
  });
});