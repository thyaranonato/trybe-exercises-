import * as Comprimento from './exercise01/length';
import * as Massa from './exercise02/mass';
import * as Capacidade from './exercise03/capacity';
import * as Area from './exercise04/area';

console.log(`10 cm correspondem a: ${Comprimento.convert(10, "cm", "m")} m`);
console.log(`5 km correspondem a: ${Comprimento.convert(5, "km", "m")} m`);
console.log(`20 dam correspondem a: ${Comprimento.convert(20, "dam", "mm")} mm`);

console.log(`10 cg correspondem a: ${Massa.convert(10, "cg", "g")} g`);
console.log(`5 kg correspondem a: ${Massa.convert(5, "kg", "g")} g`);
console.log(`20 dag correspondem a: ${Massa.convert(20, "dag", "mg")} mg`);

console.log(`10 cl correspondem a: ${Capacidade.convert(10, "cl", "l")} l`);
console.log(`5 kl correspondem a: ${Capacidade.convert(5, "kl", "l")} l`);
console.log(`20 dal correspondem a: ${Capacidade.convert(20, "dal", "ml")} ml`);

console.log(`10 cm² correspondem a: ${Area.convert(10, "cm²", "m²")} m²`);
console.log(`5 km² correspondem a: ${Area.convert(5, "km²", "m²")} m²`);
console.log(`20 dam² correspondem a: ${Area.convert(20, "dam²", "mm²")} mm²`);