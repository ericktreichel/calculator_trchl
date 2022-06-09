// Calculadora de prompt desenvolvida conforme aula inicial de JavaScript, com a adição de dois recursos por mim: o primeiro sendo a opção "0- Sair" no Menu Inicial, e a outra é a ativação da calculadora através do botão na tela, ao invés de abertura automática ao carregar a página.

var btn = document.querySelector("#start");

btn.addEventListener("click", function () {
  function calculadora() {
    const operacao = Number(
      prompt(
        "Escolha um número referente a operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão Real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação (**)\n 0- Sair (Bye)"
      )
    );

    if (operacao == 0) {
      return;
    }

    if (!operacao || operacao >= 7) {
      alert("Erro - Operação Inválida!");
      calculadora();
    } else {
      console.log(operacao);

      let n1 = Number(prompt("Insira o primeiro valor"));
      let n2 = Number(prompt("Insira o segundo valor"));
      let resultado;

      if (!n1 || !n2) {
        alert("Erro - parâmetros inválidos");
        calculadora();
      } else {
        function soma() {
          resultado = n1 + n2;
          alert(`${n1} + ${n2} = ${resultado}`);
          novaOperacao();
        }

        function subtracao() {
          resultado = n1 - n2;
          alert(`${n1} - ${n2} = ${resultado}`);
          novaOperacao();
        }

        function multiplicacao() {
          resultado = n1 * n2;
          alert(`${n1} * ${n2} = ${resultado}`);
          novaOperacao();
        }

        function divisaoReal() {
          resultado = n1 / n2;
          alert(`${n1} / ${n2} = ${resultado}`);
          novaOperacao();
        }

        function divisaoInteira() {
          resultado = n1 % n2;
          alert(
            `O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`
          );
          novaOperacao();
        }

        function potenciacao() {
          resultado = n1 ** n2;
          alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
          novaOperacao();
        }

        function novaOperacao() {
          let opcao = prompt("Deseja fazer outra operação?\n 1- Sim\n 2- Não");
          if (opcao == 1) {
            calculadora();
          } else if (opcao == 2) {
            alert("Vai pela sombra");
          } else {
            alert(
              "Digite uma opção Válida:\n 1- Sim, nova operação\n 2- Não, sair."
            );
            novaOperacao();
          }
        }
      }

      // Decidi manter esse trecho apenas para recordar outra possibilidade em relação ao switch abaixo ;)
      /*
    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisaoReal();
    } else if (operacao == 5) {
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    }
*/

      switch (operacao) {
        case 1:
          soma();
          break;
        case 2:
          subtracao();
          break;
        case 3:
          multiplicacao();
          break;
        case 4:
          divisaoReal();
          break;
        case 5:
          divisaoInteira();
          break;
        case 6:
          potenciacao();
          break;
      }
    }
  }

  calculadora();
});
