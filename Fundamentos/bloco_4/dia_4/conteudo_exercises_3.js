/* Pegue cada um dos exercícios da primeira parte das nossas aulas
de JavaScript e faça com que todos eles sejam funções de um mesmo 
arquivo. As variáveis que você define no começo de cada arquivo 
devem ser removidas e transformadas em parâmetros das funções.*/

//Soma
function soma(a, b) {
  return a + b;
}

console.log(soma(10, 5));

//Subtração
function subtracao(a, b) {
  return a - b;
}

console.log(subtracao(10, 5));

//Multiplicação
function multiplicacao(a, b) {
  return a * b;
}

console.log(multiplicacao(10, 5));

//Divisão
function divisao(a, b) {
  return a / b;
}

console.log(divisao(10, 5));

//Módulo
function modulo(a, b) {
  return a % b;
}

console.log(modulo(10, 5));

//Descobrir qual o maior número entre 2 números
function maiorNumero(a, b) {
  if (a > b)
  return (a + " é maior do que " + b)
  else 
  return (b + " é maior do que " + a)
}

console.log(maiorNumero(10, 5));

//Descobrir qual o maior número de 3 números
function maiorDeTresNumeros(a, b, c) {
  if (a >b && a > c)
  return ("O maior número é: " + a + " (a)")
  else if (b > a && b > c)
  return ("O maior número é: " + b + " (b)")
  else 
  return ("O maior número é: " + c + " (c)")
}

console.log(maiorDeTresNumeros(10, 20, 5));

//Descobrir se o número é positivo, negativo ou 0
function tipoDoNumero(a) {
  if (a > 0)
  return ("O número: " + a + " é positivo.")
  else if (a < 0)
  return ("O número: " + a + " é negativo.")
  else 
  return ("Zero");
}

console.log(tipoDoNumero(-5));
