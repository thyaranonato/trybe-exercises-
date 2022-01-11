function numerosNaturais(numero) {
  if (numero > 0) {
    return 'positivo';
  }

  if (numero < 0) {
    return 'negativo';
  }

  return 'neutro';
}

module.exports = numerosNaturais;