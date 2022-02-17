"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comprimento = __importStar(require("./exercise01/length"));
const Massa = __importStar(require("./exercise02/mass"));
console.log(`10 cm correspondem a: ${Comprimento.convert(10, "cm", "m")} m`);
console.log(`5 km correspondem a: ${Comprimento.convert(5, "km", "m")} m`);
console.log(`20 dam correspondem a: ${Comprimento.convert(20, "dam", "mm")} mm`);
console.log(`10 cg correspondem a: ${Massa.convert(10, "cg", "g")} g`);
console.log(`5 kg correspondem a: ${Massa.convert(5, "kg", "g")} g`);
console.log(`20 dag correspondem a: ${Massa.convert(20, "dag", "mg")} mg`);
