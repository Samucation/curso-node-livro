/** Entendendo como fazer map(), filter() e reduce() em ECMA Script */

console.log("--------------------------(Entendendo Map, percorendo um array e multiplicando)---------------------------");

//Exemplo de map
//Esse código irá multiplicar cada item do array por 2, isso será feito através de um map que percorre o array!
var numeros = [1, 2, 3]
var numeros2 = numeros.map(n => n * 2);

console.log("\nAqui temos o valor antes da multiplicação: \nnumeros: ", numeros);
console.log("\nAqui temos o valor depois da multiplicação através de um map sendo percorrido:\nnumeros2: ", numeros2);

console.log("---------------------------------(Vamos exercitar mais um pouco a ideia)---------------------------------");

//Exemplo de map percorrendo salarios, com ajuste de 20%
var salariosProgramador = [9800.00, 6500.00, 4500.00]
var salariosAjustatos = salariosProgramador.map(sal => sal + ((sal * 20 ) / 100));

console.log("\nAqui vamos imprimir o valor dos salários antes do ajuste:\n", salariosProgramador);
console.log("\nAgora vamos imprimir o sarios ajustados em 20%:\n", salariosAjustatos);

console.log("-----------------------------------------(Entendendo o filter)-------------------------------------------");

//A função filter() filtra os elementos do array e somente os elementos que satisfazem à condição serão adicionados no novo array:
var numerosFilter = [1, 2, 3]
var numerosFilter2 = numerosFilter.filter(n => n > 1); //numerosFilter2 receberá apenas quem for maior que 1!

console.log("\nAqui temos o array antes de ser filtrado pelo filter: \nnumerosFilter:", numerosFilter);
console.log("\nAqui temos o resultado do filter, que neste caso irá imprimir apenas valores acima de 1: \nnumerosFilter2:", numerosFilter2);

console.log("--------------------(Vamos exercitar mais um pouco a ideia, por minha conta e risco)---------------------");

var cargos = ['Estagiario','Programador Trainee','Programador Junior', 'Programador Pleno', 'Programador Sênior']
var possiveisArquitetos = cargos.filter(cargo => cargo != 'Estagiario' && cargo != 'Programador Trainee' && cargo != 'Programador Junior');

console.log("\nArray de cargos antes de ser filtrado pelo filter:\n cargos:\n", cargos);
console.log("\nResultado do filter, o retorno deve ser uma lista com os programadores candidatos a promoção ao cargo de arquiteto:\nPossiveisArquitetos:\n", possiveisArquitetos);

console.log("----------------------(Quero exercitar mais um pouco, por minha conta e risco v2)------------------------");

console.log("\nVamos lá, agora vamos fazer o filter um pouco diferente");
console.log("ao invés de ir filtrando um por um o que não queremos, iremos passar uma lista do que nao queremos.");

var todosCargosProgramador = ['Estagiario','Programador Trainee','Programador Junior', 'Programador Pleno', 'Programador Sênior']
var cargosSemPermissaoParaArquiteto = ['Estagiario','Programador Trainee','Programador Junior']

//Usando lambda para fazer a consulta de maneira mais consistente e profissional.
var possiveisProgramadoresArquitetos = todosCargosProgramador.filter(cargoAutorizado => cargosSemPermissaoParaArquiteto.indexOf(cargoAutorizado) < 0);

console.log("\nArray de todosCargosProgramador antes de ser filtrado pelo filter:\n todosCargosProgramador:\n", todosCargosProgramador);
console.log("\nArray de cargos que não tem permissão para serem arquitetos de software:\n", cargosSemPermissaoParaArquiteto);
console.log("\nResultado do filter, o retorno deve ser uma lista com os programadores candidatos a promoção ao cargo de arquiteto:\nPossiveisArquitetos:\n", possiveisProgramadoresArquitetos);

console.log("----------------------(Aprendendo sobre reduce *Acumulador de valores do array)------------------------");

var numerosAteDez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//numerosAteDez.reduce recebe apenas dois primeiros parametros, ignorando a posição de inicio, nesse caso o primeiro item do array será ignorado e passado como o valor inicial.
var totalSomaNumerosAteDezComecandoPeloSegundo = numerosAteDez.reduce((valorAcumulado, n) => (valorAcumulado + n * 2)); //Na posição 2
console.log("A soma dos numerosAteDez é:", totalSomaNumerosAteDezComecandoPeloSegundo);

//Aqui informamos o valor inicial como 0. Neste caso, todos os items serão processados.
var totalSomaNumerosAteDezComecandoPeloPrimeiro = numerosAteDez.reduce((valorAcumulado, n) => (valorAcumulado + n * 2), 0); //Na posição 0
console.log("A soma dos numerosAteDez é:", totalSomaNumerosAteDezComecandoPeloPrimeiro);