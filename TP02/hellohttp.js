// Carrega Modulo http e URL 
var http = require('http');
var url = require('url'); 
var fs = require('fs');

// Função para ler um arquivo e escrever na response 

function readFile(response, file){

    fs.readFile(file, function(err, data){


        response.end(data);

    });

}


// Bloco de função Call (implemetando a lógica)
var callback  = function(request, response){
 
    var parts = url.parse(request.url); 
    if(parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Site principal");    
    }else if (parts.path == "/rota1"){
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        
        
    }else if (parts.path == "/rota1/catalogo"){
            response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
            readFile(response, "catalogo.json")

        }else if (parts.path == "/rota1/teste"){
            response.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
            readFile(response, "teste.html")            
    
                 
    


   }else if (parts.path == "/rota1/cadastro"){
    response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
    readFile(response, "cadastro.json")    
    
    }else if (parts.path == "/rota1/dados"){
    response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
    readFile(response, "dados.json")   
    
    }else if (parts.path == "/rota2"){
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Site do Rota 2");   
    }else if (parts.path == "/rota2/pdf"){
        response.writeHead(200, {"Content-type": "application/pdf; charset=utf-8"});
        readFile(response, "arquivo.pdf") }
        else if (parts.path == "/rota2/image"){
            response.writeHead(200, {"Content-type": "image/jpeg; charset=utf-8"});
            readFile(response, "imagemcps.jpg") }
    
    else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Site do Rota 3");   
    }else{
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        response.end("Rota invalida - 404");
    }
}

// Criando servidor
var server = http.createServer(callback); 
server.listen(3000); 
console.log(">> Servidor Iniciado em http://localhost:3000/")

