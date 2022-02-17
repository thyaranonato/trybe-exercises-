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
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10 cm e altura 25 cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5 cm e altura 30 cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100 cm e altura 200 cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10 cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5 cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100 cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10 cm e altura 25 cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5 cm e altura 30 cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100 cm e altura 200 cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`Losango de D = 32 cm e d = 18 cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango de D = 200 cm e d = 50 cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango de D = 75 cm e d = 25 cm: ${Exercise.losango(75, 25)}cm²`);
console.log(`Trapézio de B = 100 cm, b = 70 cm e h = 50 cm: ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Trapézio de B = 175 cm, b = 50 cm e h = 35 cm: ${Exercise.trapezio(175, 50, 35)}cm²`);
console.log(`Trapézio de B = 150 cm, b = 120 cm e h = 80 cm: ${Exercise.trapezio(150, 120, 80)}cm²`);
console.log(`Círculo de PI = 3.14 e r = 25 cm: ${Exercise.circle(3.14, 25)}cm²`);
console.log(`Círculo de PI = 3.14  e r = 100 cm: ${Exercise.circle(3.14, 100)}cm²`);
console.log(`Círculo de PI = 3.14 e r = 12.5 cm: ${Exercise.circle(3.14, 12.5)}cm²`);
