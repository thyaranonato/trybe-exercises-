"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise01_1 = __importDefault(require("./exercise01"));
const exercise02_1 = __importDefault(require("./exercise02"));
const exercise04_1 = require("./exercise04");
console.log(exercise01_1.default.MAIO);
console.log(exercise01_1.default.DEZEMBRO);
console.log(exercise01_1.default.MARCO);
console.log(exercise02_1.default.OUTONO);
console.log(exercise02_1.default.VERAO);
console.log(exercise02_1.default.PRIMAVERA);
// Exercício 5
const gol = new exercise04_1.Car("Volksvagem", exercise04_1.Colors.SILVER, 4);
console.log(gol.openTheDoor(exercise04_1.Doors.DRIVER));
console.log(gol.closeTheDoor(exercise04_1.Doors.DRIVER));
console.log(gol.turnOn());
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.LEFT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.RIGHT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.RIGHT));
console.log(gol.speedDown());
console.log(gol.stop());
console.log(gol.openTheDoor(exercise04_1.Doors.BEHIND_RIDE));
console.log(gol.closeTheDoor(exercise04_1.Doors.BEHIND_RIDE));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.RIGHT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.LEFT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(exercise04_1.Directions.RIGHT));
console.log(gol.speedDown());
console.log(gol.stop());
console.log(gol.openTheDoor(exercise04_1.Doors.BEHIND_RIDE));
console.log(gol.closeTheDoor(exercise04_1.Doors.BEHIND_RIDE));
console.log(gol.speeddUp());
// Exercício 6
const calabresa = {
    flavor: "Calabresa",
    slices: 8
};
console.log(calabresa);
const marguerita = {
    flavor: "Marguerita",
    slices: 6
};
console.log(marguerita);
const nutela = {
    flavor: "Nutela",
    slices: 4
};
console.log(nutela);
