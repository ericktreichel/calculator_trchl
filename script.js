var trueOrFalse = false;
console.log(trueOrFalse);

const erick = 1;
console.log(erick);
///
///
/*
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}
escopoLocal();
*/
// = Significa ATRIBUIÇÃO
// == Significa COMPARAÇÃO - retorna T ou F
// === Significa COMPARAÇÃO IDENTICA

var atribuicao = "erick";

var comparacao = "0" == 0;

var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);
// dá false pois o tipo de de dado "0" e 0 é diferente, então no === dá false e == dá true

////// ARRAYS E OBJETOS

let array = ["string", 1, true, ["array2a", "array2b"], ["array3a", "array3b"]];
console.log(array);
console.log(array[3]);

///// Manipulando Arrays
// forEach
array.forEach(function (item, index) {
  console.log(item, index);
});

// push - adiciona um item ao final do array
array.push("novo item");
console.log(array);

// pop - remove o último item do array
array.pop();
console.log(array);

let object = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array1"],
  objectInterno: { objectInterno: "objeto interno" },
};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var array0 = object.array;
console.log(array0);

//// Estruturas Condicionais
// if

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {
  if (jogador1 > 0) {
    console.log("jogador1 marcou ponto");
  } else if (jogador2 > 0) {
    console.log("jogador2 marcou ponto");
  } else {
    console.log("Ninguém marcou ponto");
  }
}

jogador1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são válidos")
  : console.log("Os jogadores são inválidos");
if (jogador1 > 0 && jogador2 == 0) {
  console.log("jogador1 marcou ponto");
  placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log("jogador2 marcou ponto");
  placar = jogador2 > jogador1;
} else {
  console.log("Ninguém marcou ponto");
}

// Switch

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("jogador1 ganhou");
    break;
  case (placar = jogador2 > jogador1):
    console.log("jogador2 ganhou");
    break;
  default:
    console.log("Empatou");
}

///// ESTRUTURA DE REPETIÇÃO
// For, For/in, For/of, While, Do/while
// For
// executa uma instrução até que ela seja falsa
let arrayq = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let objectq = {
  propriedade1: "valor1",
  propriedade2: "valor2",
  propriedade3: "valor3",
};

for (let indice = 0; indice < array.length; indice++) {
  console.log(indice);
}

// for/in

for (let i in arrayq) {
  console.log(i);
}

for (i of arrayq) {
  console.log(i);
}

// While cria a repetição enquanto uma condição seja verdadeira
/*
var a = 0;
while (a < 10) {
  a++;
  console.log(a);
}
*/
// Do/while - executa uma instrução até que determinada condição seja falsa.
var a = 0;
do {
  a++;
  console.log(a);
} while (a < 10);

///////// FUNÇÕES

function funcao() {
  console.log("It's Ok! From a function");
}
funcao();

//  Function utilizando parâmetros:
function mensagem(primeiro, segundo) {
  console.log(primeiro, segundo);
}
mensagem("erick", "treichel");

// Funções declarativas
function funcao1() {
  console.log("alright!");
}
funcao1();

var funcao2 = function funcao2() {
  console.log("função com nome declarado");
};
funcao2();

var funcao3 = function () {
  console.log("função sem nome declarado");
};
funcao3();

// Função anônima - ARROW FUNCTION
var funcao4 = () => {
  console.log("arrow function");
};
funcao4();
