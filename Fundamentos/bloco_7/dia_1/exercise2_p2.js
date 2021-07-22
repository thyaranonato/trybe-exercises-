// 2) Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = phrase => {
  let arrayWord = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (let word of arrayWord) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
