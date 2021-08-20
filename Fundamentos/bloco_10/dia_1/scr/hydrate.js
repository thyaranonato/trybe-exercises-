function hydrate(string) {
  let water = 0;
  let numbers = string.match(/\d+/g).map(Number);
  for (let index = 0; index < numbers.length; index += 1) {
    water += numbers[index];
  } if (water === 1) {
    return (`${water} copo de água`);
  } return (`${water} copos de água`);
}

module.exports = hydrate;
