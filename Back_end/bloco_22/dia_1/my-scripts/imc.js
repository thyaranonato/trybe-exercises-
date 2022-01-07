const readline = require('readline-sync');

function calculoIMC() {
  const peso = readline.questionInt('Qual o seu peso? (Em Kg)');
  const altura = readline.questionInt('Qual a sua altura? (Em cm)');
  console.log(`O seu peso é: ${peso} e a sua altura é: ${altura}`);
  const imc = (peso / Math.pow(altura /100, 2)).toFixed(2);
  console.log(`O seu IMC é: ${imc}`);
}

calculoIMC();
