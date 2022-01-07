const readline = require('readline-sync');

function calculoVelocidadeMedia() {
  const distancia = readline.questionInt("Distância percorrida em metos: ");
  const tempo = readline.questionInt("Tempo gasto em segundos: ");

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`A velocidade média é: ${velocidadeMedia} m/s.`);
}

calculoVelocidadeMedia();
