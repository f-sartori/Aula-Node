const express = require('express');

const app = express();

//Criação de rotas 
//Chama o hello world em 127.0.0.1:3000/
app.get('/', function(req, res){
     res.end('Hello World!');
});

//Chama o nome digitado pela url 127.0.0.1:3000/nome
app.get('/:nome', function(req, res){
    res.end('Ola ' + req.params.nome);
});

app.get('/soma/:a/:b', function(req, res){
    var n1 = Number(req.params.a);
    var n2 = Number(req.param.b);
    var soma = n1 + n2;

    res.end('A soma é de' + n1 + ' + '+ n2 +' é '+ soma);
});

//Fazer subtração, multiplicação e divisão




//const port = 3000;
//const hostname = '127.0.0.1';

//port , hostname , function(){}

app.listen(3000,'127.0.0.1',function(){
    console.log('Servido rodando em http://' + '127.0.0.1'+ ':3000/');
});