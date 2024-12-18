import { Moto } from "../model/Moto";

export interface MotoRepository {
  //Métodos do Crud (Create, Read, Update e Delete)
  criarMoto(produto: Moto): void;
  listarTodasAsMotos(): void;
  consultarMotoPorID(number: number): void;
  atualizarMoto(produto: Moto): void;
  deletarMoto(numero: number): void;
}
