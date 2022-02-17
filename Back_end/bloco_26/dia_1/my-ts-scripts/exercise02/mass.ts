const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function errorMessage(unity: string) {
  throw new Error(`A unidade ${unity} não é válida.`);
}

export function convert(value: number, forUnity: string, toUnity: string): number {
  
  if (!units.includes(forUnity)) errorMessage(forUnity);
  if (!units.includes(toUnity)) errorMessage(toUnity);
  
  const forIndex = units.indexOf(forUnity);
  const toIndex = units.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}
