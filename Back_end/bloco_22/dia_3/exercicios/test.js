const { expect } = require('chai');

const numerosNaturaisFunc = require('./numerosNaturais');

describe('Executa a função "numerosNaturaisFunc"', () => {
  describe('Quando o numero for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numerosNaturaisFunc(5);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numerosNaturaisFunc(5);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o numero for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numerosNaturaisFunc(-5);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = numerosNaturaisFunc(-5);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o numero for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numerosNaturaisFunc(0);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = numerosNaturaisFunc(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});