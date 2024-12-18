import { Moto } from "./Moto";

export class MotoUsada extends Moto {
  private _mesesFinanciamento: number;
  private _valorTotalFinanciamento: number;

  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    ano: number,
    tipo: number,
    mesesFinanciamento: number
  ) {
    super(id, nome, marca, preco, ano, tipo);
    this._mesesFinanciamento = mesesFinanciamento;
    this._valorTotalFinanciamento =
      (preco * 0.01 * Math.pow(1 + 0.01, 24)) / Math.pow(1 + 0.01, 24) - 1;
  }

  public get mesesFinanciamento() {
    return this._mesesFinanciamento;
  }

  public set mesesFinanciamento(mesesFinanciamento: number) {
    this._mesesFinanciamento = mesesFinanciamento;
  }

  public set calcularFinanciamento(valor: number) {
    this._valorTotalFinanciamento =
      (valor * 0.01 * Math.pow(1 + 0.01, this.mesesFinanciamento)) /
      (Math.pow(1 + 0.01, this.mesesFinanciamento) - 1);
  }

  public get ValorTotalFinanciamento(): number {
    return this._valorTotalFinanciamento;
  }

  public visualizar(): void {
    super.visualizar();
    let financiamento = this._valorTotalFinanciamento;
    console.log(
      `Preço da Parcela da Moto (financiamento): ${new Intl.NumberFormat(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      ).format(financiamento)} durante ${this.mesesFinanciamento} meses`
    );
  }
}
