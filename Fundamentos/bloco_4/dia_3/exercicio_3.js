/*3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****

Atenção! Note que esse exercício é bem mais complexo que o 
anterior! Não basta, aqui, imprimir somente asteriscos. 
Você precisará de uma lógica para imprimir espaços também.*/

let base = 5;
let simbolo = "*";
let linhaDeEntrada = " ";
let posicaoDeEntrada = base;

for (let indexLinha = 0; indexLinha < base; indexLinha += 1) {
  for  (let indexColuna = 0; indexColuna <= base; indexColuna += 1) {
    if (indexColuna < posicaoDeEntrada) {
      linhaDeEntrada = linhaDeEntrada + " ";
    } else {
      linhaDeEntrada = linhaDeEntrada + simbolo;
    }
  }
  console.log(linhaDeEntrada);
  linhaDeEntrada = " ";
  posicaoDeEntrada -= 1;
}
