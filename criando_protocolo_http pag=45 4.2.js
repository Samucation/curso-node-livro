/** Carregando um sistema do tipo HTTP em ECMA SCRIPT NODE */

//Carrega o módulo HTTP
var http = require('http');

//Função de callback para o servidor HTTP
var callback = function(request, response) {
    //Define o cabeçalho (header) com o tipo da resposta
    response.writeHead(200, {"Content-Type": "text/plain"});

    //Mensagem de retorno
    response.end("Hello World Node callback!\n");
};

//Servidor HTTP
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado...");