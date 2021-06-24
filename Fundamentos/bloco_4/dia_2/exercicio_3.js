/* 3) Para o terceiro exercício, calcule e imprima a média 
aritmética dos valores contidos no array;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado_soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
  resultado_soma += numbers[index];
}

let  media_aritmetica = resultado_soma / numbers.length;
console.log(media_aritmetica);
