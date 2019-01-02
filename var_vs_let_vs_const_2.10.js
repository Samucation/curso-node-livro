/** Entendendo as diferenças de var, let, const em ECMA Script */

console.log("-----------------------------------------(Exemplo funcional usando var)------------------------------------------------");
//Exemplo funcional de uso do atributo var
nome = "Samuel";
var nome;
if(1 == 1) {
    var sobrenome = "Ferreira Duarte";
}
console.log(nome, sobrenome);
console.log("Como vimos, a função foi executada com sucesso!\n");

console.log("-------------------------------(Exemplo não funcional usando let da maneira errada)------------------------------------");

console.log("Porém o mesmo não aconteceria se tivessemos utilizado a função let");
console.log("Vamos tentar executar o mesmo exemplo mas agora colocando let ao invés de var\n");

console.log("O nomeDois dara erro, pois o mesmo está sendo chamado por let, já sabemos que irá estourar uma exception.");

//Exemplo não* funcional de uso do atributo var
nomeDois = "Samuel";
let nomeDois; //Não se pode usar let, pois o atributo já foi declarado com o mesmo nome;

if(1 == 1) {
    var sobrenome = "Ferreira Duarte";
}
console.log(nomeDois, sobrenome);
