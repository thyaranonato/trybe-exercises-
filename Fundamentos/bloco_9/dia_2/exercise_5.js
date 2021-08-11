// Exercício 5 - Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    // source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    const newArray = Array.from( 
      { length: 10 },
      () => Math.floor((Math.random() * 50) + 1)
    );
      const sum = newArray.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);

      (sum < 8000) ? resolve(sum) : reject();
  });
  promise.then(sum => [2, 3, 5, 10].map(number => sum / number))
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .then(msg => console.log(msg))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  );
};

fetchPromise();
