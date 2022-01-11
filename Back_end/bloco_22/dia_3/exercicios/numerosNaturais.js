function numerosNaturais(numero) {
  if (typeof numero !== 'number') {
    return 'o valor deve ser um número';
  }

  if (numero > 0) {
    return 'positivo';
  }

  if (numero < 0) {
    return 'negativo';
  }

  return 'neutro';
}

module.exports = numerosNaturais;