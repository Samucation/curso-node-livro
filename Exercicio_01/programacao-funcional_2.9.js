

/** Entendendo a programação funcional em JS ECMA Node */
console.log("\n\n------------------------------------------( 1 )-------------------------------------------------\n");

function nomeMaisSobrenome(nome, sobrenome) {
    return "\n\n" + nome + " " + sobrenome + "\n";
}

function idadeMaisPeso(idade, peso) {
    return "\n\nIdade:" + idade + " anos\nPeso:" + peso + "Kg\n";
}

//Esta função recebe outra função como parametro
function executarChamadaDeFuncao(funcaoGenerica, primeiroValor, segundoValor) {
    return funcaoGenerica(primeiroValor, segundoValor);
}

//Função nomeMaisSobrenome será executada por outra função.
let resultado = executarChamadaDeFuncao(nomeMaisSobrenome, "Samuel", "Ferreira Duarte");

console.log("O resultado da chamada funcional de executarChamadaDeFuncao chamando nomeMaisSobrenome foi:");
console.log("Resultado:", resultado);


console.log("------------------------------------------( 2 )-------------------------------------------------\n");

//Função idadeMaisPeso sera executada por outra função.
let resultadoDois = executarChamadaDeFuncao(idadeMaisPeso, 33, 103);

console.log("O resultado da chamada funcional de executarChamadaDefuncao chamando idadeMaisPeso foi: ");
console.log("Resultado:", resultadoDois);

console.log("------------------------------------------( 3 )-------------------------------------------------\n");
console.log("Passando funções anonimas, a função será passada com oparametro sem nome:");

let resultadoTres = executarChamadaDeFuncao(function(valorA, valorB) { return valorA + valorB}, 1, 2);

console.log("Imprimindo resultado de função anonima: ");
console.log("O valor impresso foi:", resultadoTres);

console.log("------------------------------------------( 4 )-------------------------------------------------\n");

console.log("Agora vamos testar a execução de uma função como variavel (Atributo)\n");

//Esta função recebe outra função como parametro
var funcaoEmAtributo = function(valorA, valorB) { return valorA + valorB};
let resultadoQuatro = funcaoEmAtributo(funcaoEmAtributo, 1, 2);

//Imprimindo resultado
console.log("Resultado:", resultadoQuatro);

console.log("\n## Agora terminamos o nosso sisteminha usando as quatro formas de declarar objeto em JS ECMA ##");



