export enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata",
}

export enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

export enum Doors {
  DRIVER = "Do(a) motorista",
  RIDE = "Do(a) carona",
  BEHIND_DRIVER = "De trás do(a) motorista",
  BEHIND_RIDE = "De trás do(a) carona",
}

export class Car {
  _make: string;
  _color: Colors;
  _doors: number;

  constructor(make: string, color: Colors, doors: number) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log("Acionando a buzina: BI BIII!");
  }

  turnOn(): void {
    console.log("Ligando o carro!");
  }

  turnOff(): void {
    console.log("Desligando o carro!");
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}!`);
  }

  speeddUp(): void {
    console.log("Acelerando o carro!!");
  }

  speedDown(): void {
    console.log("Desacelerando o carro.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta: ${door}.`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta: ${door}.`);
  }
}
