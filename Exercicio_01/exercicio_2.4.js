

/** Testando atributo vazio dentro da função */

//Propositalmente existe um atributo nome com valor vazio, o motivo é saber o que retorna.
function metodoComAtributoVazio() {
    var cabelosBons = 33000;
    var cabelosBrancos = 5000;
    var totalCabelos = cabelosBons + cabelosBrancos;
    var nome; //Atributo definido sem valor

    console.log("A quantidade de cabelos brancos do indivíduo é %d e a quantidade de cabelos bons %d", cabelosBrancos, cabelosBons);
    console.log("O total de cabelos é %d", totalCabelos);
    console.log("\n\n## Tipos de atributos da função ##");
    console.log("O tipo do atributo nome é %s \nO tipo do atributo cabelosBons é %s\nO tipo do atributo cabelosBrancos é %s", typeof(nome), typeof(cabelosBons), typeof(cabelosBrancos));
    console.log("\nVamos imprimir esse atributo nome vazio e ver o que retorna %s \n", nome);

    return nome;
}

var recebeAtributoStringVazio = metodoComAtributoVazio();
console.log("Iniciando testes de retorno da função");

//Testando os testes de retorno da função
if(recebeAtributoStringVazio == undefined) {
    console.log("1 - O atributo recebeAtributoStringVazio não tem valor definido");
} else if (recebeAtributoStringVazio == "undefined") {
    console.log("2 - O atributo recebeAtributoStringVazio não tem valor definido");
} else {
    console.log("Nenhum dos testes foi válido");
}

console.log("\nFim do nosso sisteminha");