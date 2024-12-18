import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {
  let opcao;

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

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Motos\n\n",
          colors.reset
        );

        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar Moto - por número do ID\n\n",
          colors.reset
        );

        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar cadastro da Moto\n\n",
          colors.reset
        );

        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nDeletar cadastro da Moto\n\n",
          colors.reset
        );

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
  console.log("    ║          3 - Consulta Moto por ID                  ║");
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
