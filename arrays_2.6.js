

/** Validando estrutura de Arrays em JS Node */

//Metodo que imprime array com nomes
function imprimeLista() {
    var nomes = ['Samuel', 'Marcia Tanimoto', 'Ayrton', 'Nego Bomba']

    nomes.push('Joaozinho');
    nomes.push('Maria');

    console.log("O Circulo de amigos meus é\n");

    for(let i = 0; nomes.length > i; i ++) {
        console.log(nomes[i]);
    }
}

imprimeLista();

console.log("\n\nVamos melhorar o código para você usuário que esta lendo nada mudou");

//Metodo que imprime array com nomes de maneira mais otimizada usando for(let nomeID in nomes)
function imprimeListaMelhorada() {
    var nomes = ['Samuel', 'Marcia Tanimoto', 'Ayrton', 'Nego Bomba']

    nomes.push('Joaozinho');
    nomes.push('Maria');

    console.log("O Circulo de amigos meus é (Usando lista melhorada com for(let nomeID in nomes) ) \n");

    for(let nomeID in nomes) {
        console.log(nomes[nomeID]);
    }
}

imprimeListaMelhorada();

console.log("Neste segundo exemplo, o for foi percorrido de maneira mais sucinta\n\n")

console.log("Agora vamos aprender a fazer uma impressão direta sem a necessidade de usar a lista para imprimir no for")
//Metodo que imprime array com nomes de maneira mais otimizada usando nomrd.map(nome => console.log(nome));
function imprimeListaMelhoradaParteDois() {
    var nomes = ['Samuel', 'Marcia Tanimoto', 'Ayrton', 'Nego Bomba']

    nomes.push('Joaozinho');
    nomes.push('Maria');

    console.log("O Circulo de amigos meus é (Usando lista melhorada parte dois com nomes.map(nome => console.log(nome)) )\n");

    nomes.map(nome => console.log(nome));
}

imprimeListaMelhoradaParteDois();

console.log("Chegamos ao fim de mais um exercico, finalizamos o exercicio 2.6");