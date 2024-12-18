import { colors } from "../util/Colors";
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
    this._valorTotalFinanciamento = preco;
  }

  public get mesesFinanciamento() {
    return this._mesesFinanciamento;
  }

  public set mesesFinanciamento(mesesFinanciamento: number) {
    this._mesesFinanciamento = mesesFinanciamento;
  }

  public set calcularFinanciamento(valor: number) {
    const parcela =
      (valor * 0.01 * Math.pow(1 + 0.01, this._mesesFinanciamento)) /
      (Math.pow(1 + 0.01, this._mesesFinanciamento) - 1);

    this._valorTotalFinanciamento = parcela * this.mesesFinanciamento;
  }

  public get ValorTotalFinanciamento(): number {
    return this._valorTotalFinanciamento;
  }

  public visualizar(): void {
    super.visualizar();

    let parcela = this._valorTotalFinanciamento / this.mesesFinanciamento;
    console.log(
      colors.fg.whitestrong,
      `Preço da Parcela da Moto (financiamento): ${new Intl.NumberFormat(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      ).format(parcela)} durante ${this.mesesFinanciamento} meses`,
      colors.reset
    );
  }
}
