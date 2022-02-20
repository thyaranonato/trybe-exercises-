import MonthsOfYear from "./exercise01";
import SeasonsOfYear from "./exercise02";
import { Car, Colors, Doors, Directions } from "./exercise04";
import { Pizza } from "./exercise06";

console.log(MonthsOfYear.MAIO);
console.log(MonthsOfYear.DEZEMBRO);
console.log(MonthsOfYear.MARCO);

console.log(SeasonsOfYear.OUTONO);
console.log(SeasonsOfYear.VERAO);
console.log(SeasonsOfYear.PRIMAVERA);

// Exercício 5
const gol = new Car("Volksvagem", Colors.SILVER, 4);

console.log(gol.openTheDoor(Doors.DRIVER));
console.log(gol.closeTheDoor(Doors.DRIVER));
console.log(gol.turnOn());
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.LEFT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.RIGHT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.RIGHT));
console.log(gol.speedDown());
console.log(gol.stop());
console.log(gol.openTheDoor(Doors.BEHIND_RIDE));
console.log(gol.closeTheDoor(Doors.BEHIND_RIDE));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.RIGHT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.LEFT));
console.log(gol.speeddUp());
console.log(gol.speedDown());
console.log(gol.turn(Directions.RIGHT));
console.log(gol.speedDown());
console.log(gol.stop());
console.log(gol.openTheDoor(Doors.BEHIND_RIDE));
console.log(gol.closeTheDoor(Doors.BEHIND_RIDE));
console.log(gol.speeddUp());


// Exercício 6
const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}
console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}
console.log(marguerita);

const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}
console.log(nutela);
