// Para fixar - Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Banana', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Iogurte', 'Leite condensado'];

const fruitSalad = (fruit, additional) => {
  const saladFruit = [...fruit, ...additional];
  return saladFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));
