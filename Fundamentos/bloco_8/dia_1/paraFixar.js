// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => {
  return 'Acordando!!'
};
console.log(wakeUp);

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const coffeeTime = () => {
  return 'Bora tomar café!!'
};
console.log(coffeeTime);

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => {
  return 'Partiu dormir!!'
};
console.log(sleep);

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (things) => things();

console.log(doingThings(wakeUp));
console.log(doingThings(coffeeTime));
console.log(doingThings(sleep));
