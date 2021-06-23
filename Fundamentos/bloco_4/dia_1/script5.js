let anguloA = 70;
let anguloB = 110;
let anguloC = 20;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosSaoPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("Erro: o ângulo é inválido");
}
