import * as Comprimento from './exercise01/length';
import * as Massa from './exercise02/mass';

console.log(`10 cm correspondem a: ${Comprimento.convert(10, "cm", "m")} m`);
console.log(`5 km correspondem a: ${Comprimento.convert(5, "km", "m")} m`);
console.log(`20 dam correspondem a: ${Comprimento.convert(20, "dam", "mm")} mm`);

console.log(`10 cg correspondem a: ${Massa.convert(10, "cg", "g")} g`);
console.log(`5 kg correspondem a: ${Massa.convert(5, "kg", "g")} g`);
console.log(`20 dag correspondem a: ${Massa.convert(20, "dag", "mg")} mg`);