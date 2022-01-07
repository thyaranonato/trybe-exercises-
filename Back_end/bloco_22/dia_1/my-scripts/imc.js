function calculoIMC() {
  const peso = 70;
  const altura = 173;
  console.log(`O seu peso é: ${peso} e a sua altura é: ${altura}`);
  const imc = (peso / Math.pow(altura /100, 2)).toFixed(2);
  console.log(`O seu IMC é: ${imc}`);
}

calculoIMC();
