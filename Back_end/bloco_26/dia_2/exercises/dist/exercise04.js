"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Doors = exports.Directions = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Preta";
    Colors["WHITE"] = "Branca";
    Colors["RED"] = "Vermelha";
    Colors["SILVER"] = "Prata";
})(Colors = exports.Colors || (exports.Colors = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "Esquerda";
    Directions["RIGHT"] = "Direita";
})(Directions = exports.Directions || (exports.Directions = {}));
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "Do(a) motorista";
    Doors["RIDE"] = "Do(a) carona";
    Doors["BEHIND_DRIVER"] = "De tr\u00E1s do(a) motorista";
    Doors["BEHIND_RIDE"] = "De tr\u00E1s do(a) carona";
})(Doors = exports.Doors || (exports.Doors = {}));
class Car {
    constructor(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log("Acionando a buzina: BI BIII!");
    }
    turnOn() {
        console.log("Ligando o carro!");
    }
    turnOff() {
        console.log("Desligando o carro!");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}!`);
    }
    speeddUp() {
        console.log("Acelerando o carro!!");
    }
    speedDown() {
        console.log("Desacelerando o carro.");
    }
    stop() {
        console.log("Parando o carro.");
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta: ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta: ${door}.`);
    }
}
exports.Car = Car;
