/*
1) Crie uma função que receba uma string e retorne true se 
for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false*/

function verificaPalindromo(string) {
  for(index in string){
    if(string[index] != string[(string.length -1) - index]) {
      return false;
    }
  }return true;
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

/* 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4.*/

function maiorIndice(numeros) {
  let maiorIndice = 0;
  for (let index in numeros) {
    if (numeros[maiorIndice] < numeros[index]) {
      maiorIndice = index;
    }
  } return maiorIndice;
}

console.log(maiorIndice([5, 15, 3, 30, 0, 45]));

/* 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6.*/

function menorIndice(numeros) {
  let menorIndice = 0;
  for (let index in numeros) {
    if (numeros[menorIndice] > numeros[index]) {
      menorIndice = index;
    }
  } return menorIndice;
}

console.log(menorIndice([5, 15, 3, 30, 0, 45]));

/* 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda.*/

function nomeMaisCaracteres(names) {
  let nomeMaisCaracteres = names[0];
  for (let index in names) {
    if (nomeMaisCaracteres.length < names[index].length) {
      nomeMaisCaracteres = names[index];
    }
  } return nomeMaisCaracteres;
}

console.log(nomeMaisCaracteres(["Ana", "Pedro", "Thyara", "Antônio"]));


/* 5) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2. */

function numMaisSeRepete(numbers) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numbers) {
    let verificaNumero = numbers[index];
    for (let index2 in numbers) {
      if (verificaNumero === numbers[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numbers[indexNumeroRepetido];
}

console.log(numMaisSeRepete([5, 10, 2, 10, 8, 2, 10]));

/* 6) Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

function sumAllNumbers(numbers) {
  let resultado = 0;
  for (let index = 1; index <= numbers; index += 1) {
    resultado = resultado + index;
  }
  return resultado;
}
console.log(sumAllNumbers(10));

/* 7) Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false. */

function verifyEndOfWord(word, endOfWord) {
  word = word.split('');
  endOfWord = endOfWord.split('');
  control = true;
  for (let index = 0; index < endOfWord.length; index += 1) {
    if (word[word.length - endOfWord.length + index] != endOfWord[index]) {
      control = false;
    }
  }
  return control;
}

console.log(verifyEndOfWord('Pernambuco', 'buco'));
