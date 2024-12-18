import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { MotoZero } from "./src/model/MotoZero";
import { MotoUsada } from "./src/model/MotoUsada";
import { MotoController } from "./src/controller/MotoController";

export function main() {
  let motos: MotoController = new MotoController();

  let nomeModelo, nomeMarca: string;
  let opcao,
    precoMoto,
    anoMoto,
    tipo,
    consorcioMoto,
    idMoto,
    mesesFinanciamento: number;
  const tiposKMS = ["Usada", "ZeroKM"];

  let motoZero1 = new MotoZero(
    motos.gerarID(),
    "Ninja 400",
    "Kawasaki",
    50000,
    (anoMoto = 2025),
    2,
    12
  );
  motos.criarMoto(motoZero1);

  let motoUsada1 = new MotoUsada(
    motos.gerarID(),
    "CB 500X",
    "Honda",
    20000,
    (anoMoto = 2025),
    1,
    24
  );
  motos.criarMoto(motoUsada1);

  /*const motousada: MotoUsada = new MotoUsada(
    31,
    "CB 500X",
    "Honda",
    20000,
    2018,
    2,
    24
  );
  motousada.visualizar();*/

  do {
    chamarMenu();

    opcao = readlinesync.questionInt("");

    if (opcao === 0) {
      console.log(colors.fg.redstrong, "Obrigado Por usar o Motos Teles");

      about();

      console.log(colors.reset, "");

      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(
          colors.fg.whitestrong,
          "\n\nCadastrar Moto\n\n",
          colors.reset
        );

        console.log("Digite o modelo da moto: ");
        nomeModelo = readlinesync.question("");

        console.log("Digite a marca da moto: ");
        nomeMarca = readlinesync.question("");

        console.log("Digite a o preço da moto: ");
        precoMoto = readlinesync.questionFloat("");

        console.log("Moto USADA OU ZERO KMS?");
        tipo = readlinesync.keyInSelect(tiposKMS, "", { cancel: false }) + 1;

        switch (tipo) {
          case 1:
            console.log("Digite o ANO da moto:");
            anoMoto = readlinesync.questionInt("");

            console.log("Quantos Meses de Financiamento você deseja fazer: ");
            mesesFinanciamento = readlinesync.questionInt("");

            motos.criarMoto(
              new MotoUsada(
                motos.gerarID(),
                nomeModelo,
                nomeMarca,
                precoMoto,
                anoMoto,
                tipo,
                mesesFinanciamento
              )
            );
            break;

          case 2:
            console.log("Digite quantos meses de consórcio você deseja:");
            consorcioMoto = readlinesync.questionInt("");

            motos.criarMoto(
              new MotoZero(
                motos.gerarID(),
                nomeModelo,
                nomeMarca,
                precoMoto,
                (anoMoto = 2025),
                tipo,
                consorcioMoto
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Motos\n\n",
          colors.reset
        );

        motos.listarTodasAsMotos();

        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar Moto - por número do ID\n\n",
          colors.reset
        );

        console.log("Digite o ID da Moto: ");
        idMoto = readlinesync.questionInt("");

        motos.consultarMotoPorID(idMoto);

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar cadastro da Moto\n\n",
          colors.reset
        );

        console.log("Digite o ID da Moto: ");
        idMoto = readlinesync.questionInt("");
        motos.consultarMotoPorID(idMoto);

        let moto = motos.buscarNoArray(idMoto);
        console.log("\n =============================");
        if (moto != null) {
          console.log("Digite o nome do modelo da moto: ");
          nomeModelo = readlinesync.question("");

          console.log("Digite a marca da moto: ");
          nomeMarca = readlinesync.question("");

          console.log("Digite a o preço da moto: ");
          precoMoto = readlinesync.questionFloat("");

          tipo = moto.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o ANO da moto:");
              anoMoto = readlinesync.questionInt("");
              console.log("Digite a quantidade parcelas em (meses): ");
              mesesFinanciamento = readlinesync.questionInt("");

              motos.atualizarMoto(
                new MotoUsada(
                  motos.gerarID(),
                  nomeModelo,
                  nomeMarca,
                  precoMoto,
                  anoMoto,
                  tipo,
                  mesesFinanciamento
                )
              );
              break;

            case 2:
              console.log("Digite quantos meses de consórcio você deseja:");
              consorcioMoto = readlinesync.questionInt("");

              motos.atualizarMoto(
                new MotoZero(
                  motos.gerarID(),
                  nomeModelo,
                  nomeMarca,
                  tipo,
                  precoMoto,
                  (anoMoto = 2025),
                  consorcioMoto
                )
              );
              break;
          }
        } else {
          console.log(
            colors.fg.red,
            `\nA moto com o ID - ${idMoto} não foi encontrada!`,
            colors.reset
          );
        }
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nDeletar cadastro da Moto\n\n",
          colors.reset
        );

        console.log("Digite o ID da Moto: ");
        idMoto = readlinesync.questionInt("");

        motos.deletarMoto(idMoto);

        keyPress();
        break;

      default:
        colors.fg.whitestrong, "\n\nOpção Inválida!\n\n", colors.reset;
        break;
    }
  } while (true);
}

function chamarMenu() {
  console.log(colors.bg.crimson, colors.fg.blackstrong);
  console.log("\n");
  console.log("    ╔════════════════════════════════════════════════════╗");
  console.log("    ║                     TELES MOTOS                    ║");
  console.log("    ╠════════════════════════════════════════════════════╣");
  console.log("    ║          1 - Cadastrar Moto                        ║");
  console.log("    ║          2 - Listar todas as Motos                 ║");
  console.log("    ║          3 - Consultar Moto por ID                 ║");
  console.log("    ║          4 - Atualizar cadastro da Moto            ║");
  console.log("    ║          5 - Deletar cadastro da Moto              ║");
  console.log("    ║          0 - Sair                                  ║");
  console.log("    ╚════════════════════════════════════════════════════╝");
  console.log("Digite a opção desejada: ", colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

function about() {
  console.log("\n*********************************************************");
  console.log("Desenvolvido por Gustavo Teles ");
  console.log("github.com/ustavoteles");
  console.log("email - telesgustavo.dev@gmail.com");
  console.log("Generation Brasil - Bootcamp JavaScript 06 ");
  console.log("*********************************************************");
}

main();
