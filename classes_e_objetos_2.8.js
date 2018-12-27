
/** Entendendo Classes e Objetos em JS Node */

//Declarando um objeto JS direto usando Object, aparentemente a logica é inversa
//de uma linguagem como java, aqui se declara ja usando!
function objetoJS() {
    console.log("\n\n1° - ## Usando a declaração de Objeto em JS com a função Object() ##");

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
    console.log("\n2° - ## Usando a declaração de Objeto em JS usando outra sintaxe separando por virgulas! ##");

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
console.log("3° - Agora vamos pegar e vamos verificar como fica a sintaxe de objeto mais usada em java script ECMA\n");

//Criando o objeto isolado com suas dependencias, maneira mais usada fica tudo emcapsulado, logica proxima ao JAVA comum.
function Pessoa() {
    console.log("## Usando o terceiro tipo de declaração de objeto em JS ##");

    this.nome = "Samuel";
    this.sobrenome = "Ferreira Duarte";
    
    this.saudacao = function() {
        return "Olá meu jovem!";
    }
}
//Chamando  objeto isolado com suas dependencias, ele está emcapsulado dentro de uma função.
function funcaoQueChamaObjTres() {
    var pessoa =  new Pessoa();

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.sobrenome);
    console.log(pessoa.saudacao);
}
funcaoQueChamaObjTres();

console.log("\n--------------------------------------------------------------------------------------------------------");
console.log("4° - Novamente veremos mais uma forma de declarar o java script ECMA agora usando uma linguagem próxima a de linguagens já conhecidas como JAVA!");

//A classe é declarada exatamente como no JAVA, é possível até inserir metodos estaticos que não necessitam serem instanciados.
class PessoaDois {
    constructor() {
        this.nome = "Samuel";
        this.sobrenome = "Ferreira Duarte";
    }

    saudacao() {
        return "Olá meu jovem!";
    }

    static saudacaoEstatica() {
        return "Olá eu jovem, eu sou uma saudação estatica!";
    }
}
//A função quatro chama o objeto PessoaDois e imprime nos consoles seus atributos e métodos, inclusive o método estatico.
function funcaoQueChamaObjQuatro() {
    var pessoa = new PessoaDois();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.sobrenome);
    console.log(pessoa.saudacao());
    console.log(PessoaDois.saudacaoEstatica()); //Saudação estatica não precisou ser instanciado, ele como o nome sugere, é estatico!
}
funcaoQueChamaObjQuatro();

console.log("\n## Agora terminamos o nosso sisteminha usando as quatro formas de declarar objeto em JS ECMA ##");