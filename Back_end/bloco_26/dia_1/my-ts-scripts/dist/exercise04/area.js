"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function errorMessage(unity) {
    throw new Error(`A unidade ${unity} não é válida.`);
}
function convert(value, forUnity, toUnity) {
    if (!units.includes(forUnity))
        errorMessage(forUnity);
    if (!units.includes(toUnity))
        errorMessage(toUnity);
    const forIndex = units.indexOf(forUnity);
    const toIndex = units.indexOf(toUnity);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
