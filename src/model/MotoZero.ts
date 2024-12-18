import { colors } from "../util/Colors";
import { Moto } from "./Moto";

export class MotoZero extends Moto {
  private _mesesConsorcio: number;
  private _valorTotalConsorcio: number;

  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    ano: number,
    tipo: number,
    mesesConsorcio: number
  ) {
    super(id, nome, marca, preco, ano, tipo);
    this._mesesConsorcio = mesesConsorcio;
    this._valorTotalConsorcio = preco + preco * 0.1;
  }

  public get mesesConsorcio() {
    return this._mesesConsorcio;
  }

  public set mesesConsorcio(mesesConsorcio: number) {
    this._mesesConsorcio = mesesConsorcio;
  }

  public set calcularConsorcio(valor: number) {
    this._valorTotalConsorcio = valor + valor * 0.1;
  }

  public get ValorTotalConsorcio(): number {
    return this._valorTotalConsorcio;
  }

  public visualizar(): void {
    super.visualizar();
    let consorcio = this._valorTotalConsorcio / this.mesesConsorcio;
    console.log(
      colors.fg.whitestrong,
      `Preço da Parcela da Moto (consórcio): ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(consorcio)} durante ${this.mesesConsorcio} meses`,
      colors.reset
    );
  }
}
