/* 4) Com o mesmo código do exercício anterior, caso o valor final 
seja maior que 20, imprima a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado_soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
  resultado_soma += numbers[index];
}

let  media_aritmetica = resultado_soma / numbers.length;

if (media_aritmetica > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}
