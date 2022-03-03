class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve ter ao menos 3 caracteres.');
    }

    this._nome = value;
  }
}

class ItemPedido {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve ter ao menos 3 caracteres.');
    }

    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ter um valor maior do que 0.');
    }

    this._preco = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itens: ItemPedido[];
  private _metodoPagamento: string;
  private _desconto: number = 0;

  constructor(cliente: Cliente, itens: ItemPedido[], metodoPagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._metodoPagamento = metodoPagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): ItemPedido[] {
    return this._itens;
  }

  set itens(value: ItemPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter ao menos 1 item.');
    }
    this._itens = value;
  }

  get metodoPagamento(): string {
    return this._metodoPagamento;
  }

  set metodoPagamento(value: string) {
    this._metodoPagamento = value;
  }

  get desconto(): number {
    return this.desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser negativo.')
    }
    this._desconto = value;
  }
}

// Testando:
const cliente = new Cliente('Ana Paula');

const batata = new ItemPedido('Batata frita', 10.00);
const suco = new ItemPedido('Suco de uva', 5.00);
const sobremesa = new ItemPedido('Sorvete', 9.00);

const pedido = new Pedido(cliente, [batata, suco, sobremesa], 'cartão', 0.10);

console.log(pedido);
