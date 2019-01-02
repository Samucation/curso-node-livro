/** Adicionando rotas no servidor HTTP */

//Carrega os módulos
var http = require('http');
var url = require('url');

//Função callback para o servidor HTTP
var callback = function(request, response) {
    //Cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    //faz o parser da URL separando o caminho (rota)
    var parts = url.parse(request.url);

    //Verifica a rota
    if(parts.path == '/') {
        response.end("Site na raiz.");
    }
    if(parts.path == '/carros') {
        response.end("Voce digitou a rota /carros");
    } 
    response.end("Roda inválida:" + parts.path);
}

//Cria um servidor HTTP que vai responder "Hello World" para todas as requisições
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");

//Este exemplo pode ser testado usando as seguintes requisições
//http://localhost:3000
//http://localhost:3000/carros