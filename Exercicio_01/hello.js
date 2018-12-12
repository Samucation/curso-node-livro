

console.log("Hello, World Node.js!")

var nome = "Samuel";
var sobrenome = "Ferreira Duarte";
var idade = 33;
var cargo = "Analista de sistemas";

console.log("O nome do cara é:", nome, sobrenome, " e sua idade é:", idade);

function tiposDeAtributos(nome, cargo) {
    var salario = 5000.00;
    var adicional = 2560.25;
    var total = salario + adicional;

    console.log("O indivíduo %s com o cargo %s ganha o salario de %f", nome, cargo, total);
}

tiposDeAtributos((nome + " " + sobrenome), cargo);