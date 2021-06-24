
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio)



let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);

var numero = 7;
for (var contador = 1; contador <= 9; contador++) {
  console.log("*");
  console.log(numero * contador);
}

var listaDeNomes = ["Joana", "Maria", "Lucas"];
for (var indice = 0; indice < listaDeNomes.length; indice++) {
  var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
  console.log(mensagem);
}


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}


let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}
