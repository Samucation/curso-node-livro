

/** Testando atributo vazio dentro da função */

//Propositalmente existe um atributo nome com valor vazio, o motivo é saber o que retorna.
function metodoComAtributoVazio() {
    var cabelosBons = 33000;
    var cabelosBrancos = 5000;

    var totalCabelos = cabelosBons + cabelosBrancos;

    var nome; //Atributo definido sem valor

    console.log("A quantidade de cabelos brancos do indivíduo é %d e a quantidade de cabelos bons %d", cabelosBrancos, cabelosBons);
    console.log("O total de cabelos é %d", totalCabelos);

    console.log("Vamos imprimir esse atributo nome vazio e ver o que retorna %d", nome);
}

metodoComAtributoVazio();