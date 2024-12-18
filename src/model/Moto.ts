export abstract class Moto {
  private _id: number;
  private _nome: string;
  private _marca: string;
  private _preco: number;
  private _ano: number;
  private _tipo: number;

  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    ano: number,
    tipo: number
  ) {
    this._id = id;
    this._nome = nome;
    this._marca = marca;
    this._preco = preco;
    this._ano = ano;
    this._tipo = tipo;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get marca(): string {
    return this._marca;
  }

  public get preco(): number {
    return this._preco;
  }

  public get ano(): number {
    return this._ano;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public set ano(value: number) {
    this._ano = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public visualizar(): void {
    let tipo = "";

    switch (this._tipo) {
      case 1:
        tipo = "Á Vista";
        break;
      case 2:
        tipo = "Consórcio";
        break;
      default:
        tipo = "MODELO INVÁLIDO";
    }
    console.log("\n\n================================");
    console.log("Dados da Moto");
    console.log("================================");
    console.log(`Id da Moto: ${this._id}`);
    console.log(`Modelo da Moto: ${this._nome}`);
    console.log(`Ano da Moto: ${this._ano}`);
    console.log(`${tipo}`);
    console.log(
      `Valor da Moto: ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.preco)} `
    );
  }
}
