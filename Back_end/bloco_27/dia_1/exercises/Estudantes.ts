class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter pelo menos 3 caracteres.');
    }
    this._nome = value;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode ter 4 notas de provas.');
    }
    this._notasProvas = value;
  }

  get notasTrabalhos(): number[] {
    return this._notasTrabalhos;
  }

  set notasTrabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error('O estudante só pode ter 2 notas de trabalhos.');
    }
    this._notasTrabalhos = value;
  }

  somaNotas(): number {
    return [...this._notasProvas, ...this._notasTrabalhos].reduce((notaAnterior, nota) => {
      nota += notaAnterior;
      return nota;
    }, 0);
  }

  mediaNotas(): number {
    const soma = this.somaNotas();
    const divisor = this._notasProvas.length + this._notasTrabalhos.length;

    return Math.round(soma / divisor);
  }
}

// Testando:
const estudante1 = new Estudante('202201', 'Pedro Henrique');

estudante1.notasProvas = [10, 9, 5, 8];
estudante1.notasTrabalhos = [7, 6]

console.log(estudante1);
console.log('Soma de todas as notas: ', estudante1.somaNotas());
console.log('Média de todas a notas: ', estudante1.mediaNotas());

const estudante2 = new Estudante('202202', 'Maria Joana');
console.log(estudante2);
