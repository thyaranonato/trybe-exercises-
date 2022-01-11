const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escreveArquivo = require('./escreveArquivo');

describe('Executa a função "escreveArquivo"', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

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