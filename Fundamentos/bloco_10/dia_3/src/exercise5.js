// Exercício 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const uppercase = (str) => str.toUpperCase();

// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const firstLetter = (str) => str.charAt(0);

const concatStrings = (str1, str2) => str1.concat(str2);

module.exports = {
  uppercase,
  firstLetter,
  concatStrings,
};
