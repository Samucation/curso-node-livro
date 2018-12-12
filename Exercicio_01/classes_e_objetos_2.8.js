
/** Entendendo Classes e Objetos em JS Node */

//Declarando um objeto JS direto usando Object, aparentemente a logica é inversa
//de uma linguagem como java, aqui se declara ja usando!
function objetoJS() {
    console.log("\n\n## Usando a declaração de Objeto em JS com a função Object() ##");

    var pessoa = Object();
    pessoa.nome = "Samuel";
    pessoa.sobrenome = "Ferreira Duarte";

    pessoa.saudacao = function() {
        return "Olá meu jovem!";
    }

    console.log("\nImprimindo pessoa");
    console.log(pessoa);

    console.log("\nImprimindo nome de pessoa");
    console.log(pessoa.nome);

    console.log("\nImprimindo saudação");
    console.log(pessoa.saudacao);
}
objetoJS();

console.log("\n--------------------------------------------------------------------------------------------------------");

//Usando a declaração de classe direto em sua nomeação, a caracteristica deste método é que tudo é separado por virgulas.
function objetoJSNumeroDois() {
    console.log("\n## Usando a declaração de Objeto em JS usando outra sintaxe separando por virgulas! ##");

    var pessoa = {
        nome : 'Samuel',
        sobrenome : 'Ferreira Duarte',
        saudacao : function() {
            return "Olá meu jovem!";
        }
    }
    
    console.log("\nImprimindo pessoa");
    console.log(pessoa);

    console.log("\nImprimindo nome de pessoa");
    console.log(pessoa.nome);

    console.log("\nImprimindo saudação");
    console.log(pessoa.saudacao);
}
objetoJSNumeroDois();

console.log("\n--------------------------------------------------------------------------------------------------------");
console.log("Agora vamos pegar e vamos verificar como fica a sintaxe de objeto mais usada em java script ECMA\n");

//Criando o objeto isolado com suas dependencias, maneira mais usada fica tudo emcapsulado, logica proxima ao JAVA comum.
function Pessoa() {
    console.log("## Usando o terceiro tipo de declaração de objeto em JS ##");

    this.nome = "Samuel";
    this.sobrenome = "Ferreira Duarte";
    
    this.saudacao = function() {
        return "Olá meu jovem!";
    }
}

function funcaoQueCamaObjTres() {
    var pessoa =  new Pessoa();

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.sobrenome);
    console.log(pessoa.saudacao);
}
funcaoQueCamaObjTres();

console.log("\n--------------------------------------------------------------------------------------------------------");
console.log("Novamente veremos mais uma forma de declarar o java script ECMA agora usando uma linguagem próxima a de linguagens já conhecidas como JAVA");

class PessoaDois {
    constructor() {
        this.nome = "Samuel";
        this.sobrenome = "Ferreira Duarte";
    }

    saudacao() {
        return "Olá meu jovem!";
    }
}

function funcaoQueChamaObjQuatro() {
    var pessoa = new PessoaDois();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.sobrenome);
    console.log(pessoa.saudacao());
}
funcaoQueChamaObjQuatro();

console.log("\n## Agora terminamos o nosso sisteminha usando as quatro formas de declarar objeto em JS ECMA ##");