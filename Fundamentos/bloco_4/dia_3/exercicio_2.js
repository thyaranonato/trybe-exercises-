/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:

n = 5

*
**
***
****
*****

*/

let base = 5;
let simbolo = "*";
let linhaDeEntrada = "";

for (let index = 0; index < base; index += 1) {
  linhaDeEntrada = linhaDeEntrada + simbolo;
  console.log(linhaDeEntrada);
}