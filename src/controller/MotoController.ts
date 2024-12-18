import { Moto } from "../model/Moto";
import { MotoRepository } from "../repository/MotoRepository";
import { colors } from "../util/Colors";

export class MotoController implements MotoRepository {
  private listaMotos: Array<Moto> = new Array<Moto>();

  //gera
  numeroConta: number = 0;

  criarMoto(moto: Moto): void {
    this.listaMotos.push(moto);

    console.log(
      colors.fg.green,
      `\n A moto "${moto.nome}" foi registrada com sucesso`,
      colors.reset
    );
  }

  listarTodasAsMotos(): void {
    for (let moto of this.listaMotos) {
      moto.visualizar();
    }
  }

  consultarMotoPorID(numero: number): void {
    let buscaMoto = this.buscarNoArray(numero);

    if (buscaMoto != null) {
      buscaMoto.visualizar();
    } else
      console.log(
        colors.fg.red,
        `\n A moto com ID - ${numero} não foi encontrada!`,
        colors.reset
      );
  }

  atualizarMoto(moto: Moto): void {
    let buscaMoto = this.buscarNoArray(moto.id);

    if (buscaMoto != null) {
      this.listaMotos[this.listaMotos.indexOf(buscaMoto)] = moto;

      console.log(
        colors.fg.green,
        `\nA moto com ID - ${moto.id} foi atualizada com sucesso!`,
        colors.reset
      );
    } else
      console.log(
        colors.fg.red,
        `\nA moto com ID - ${moto.id} não foi encontrada!`,
        colors.reset
      );
  }

  deletarMoto(numero: number): void {
    let buscaMoto = this.buscarNoArray(numero);

    if (buscaMoto != null) {
      this.listaMotos.splice(this.listaMotos.indexOf(buscaMoto), 1);
      console.log(
        colors.fg.green,
        `\nA moto com ID - ${numero} foi DELETADA com sucesso!`,
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        `\nA moto com ID - ${numero} não foi encontrada!`,
        colors.reset
      );
    }
  }

  //Gerar ID da moto
  public gerarID(): number {
    return ++this.numeroConta;
  }

  //Checa se uma Conta Existe
  public buscarNoArray(id: number): Moto | null {
    for (let moto of this.listaMotos) {
      if (moto.id === id) return moto;
    }
    return null;
  }
}
