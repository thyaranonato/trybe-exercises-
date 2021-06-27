/*4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

let n = 5;
let simbolo = '*';
let linhaDeEntrada = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      linhaDeEntrada = linhaDeEntrada + simbolo;
    } else {
      linhaDeEntrada = linhaDeEntrada + ' ';
    }
  }
  console.log(linhaDeEntrada);
  linhaDeEntrada = '';
  controlRight += 1;
  controlLeft -= 1
}
