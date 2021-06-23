let pecaXadrez = "cavalo";

switch (pecaXadrez.toLowerCase()) {
  case "bispo":
    console.log("Bispo -> Anda na diagonal.");
    break;
  case "rei":
    console.log("Rei -> Anda uma casa apenas para qualquer direção.");
    break;
  case "rainha":
    console.log("Rainha -> Anda na diagonal, horizontal e vertical.");
    break;
  case "peão":
    console.log("Peão -> Anda apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  case "torre":
    console.log("Torre -> Anda na horizontal e vertical.");
    break;
  case "cavalo":
    console.log("Cavalo -> Anda em 'L' e pode pular sobre as peças.");
    break;
  default:
    console.log("Erro, a peça é inválida!");
    break;
};
