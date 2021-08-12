// Exercício bônus - Refatore a Promise para utilizar somente async e await.

const randomNumbersSum = () => {
  const newArray = Array.from( 
    { length: 10 },
    () => Math.floor((Math.random() * 50) + 1)
  );
  const sum = newArray.map(number => number * number)
  .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
}

const arraySum = (sum) => [2, 3, 5, 10].map(number => sum / number)
.reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await randomNumbersSum();
    const sumOfSum = await arraySum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();