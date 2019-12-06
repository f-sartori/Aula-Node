var express = require('express')
var cors = require('cors')
var app = express()


app.use(cors())

var dataJson = [{
  "id": 1,
  "Nome": "Lucas",
  "Sobrenome": "Capelotto",
  "Idade": 26,
  "Nota": 5,
  "Situacao": "Aprovado",
},{
  "id": 2,
  "Nome": "Felipe",
  "Sobrenome": "Sartori",
  "Idade": 22,
  "Nota": 5,
  "Situacao": "Aprovado"

},{
  "id": 3,
  "Nome": "Teste3",
  "Sobrenome": "Sobrenome3",
  "Idade": 26,
  "Nota": 5,
  "Situacao": "Aprovado3"

}

,{
  "id": 4,
  "Nome": "Teste4",
  "Sobrenome": "Sobrenome4",
  "Idade": 26,
  "Nota": 5,
  "Situacao": "Aprovado4"

},{
  "id": 5,
  "Nome": "Teste5",
  "Sobrenome": "Sobrenome5",
  "Idade": 26,
  "Nota": 5,
  "Situacao": "Aprovado5"

}





]


//puxa todos os dados
app.get('/alunos/notas/matematica', function (req, res) {
  res.json(dataJson);
});


//puxa somente o aluno com o id passado - Meu metodo
app.get('/alunos/notas/matematica/:id', function (req, res) {

  var comparador = Number(req.params.id);
  var resposta = dataJson.filter(x => x.id == comparador);
  
  res.json(resposta);
});

//metodo da aula for
app.get('/alunos/notas/matematica/for/:id', function (req, res) {

  for (let i = 0; i < dataJson.length; i++) {
    const element = dataJson[i];
    if(element.id == req.params.id){
     
      res.json(element);
    }
  }
  
});


//metodo da aula foreach
app.get('/alunos/notas/matematica/for2/:id', function (req, res) {

  dataJson.forEach(element =>{
      if(element.id == req.params.id)
      res.json(element);
  })
  
});

//Busca pelo nome
app.get('/alunos/notas/matematica/nome/:nome', function (req, res) {
  
  dataJson.forEach(element =>{
      if(element.Nome == req.params.nome)
      res.json(element);
  })

});


//Busca pelo nome
app.get('/aluno/:id', function (req, res) {
  
  dataJson.forEach(element =>{
      if(element.id == req.params.id)
      res.json(element);
      
  })

});



//Busca tudo url diferente
app.get('/aluno/', function (req, res) {

      res.json(dataJson);
      
  
});




 


 




app.listen(3000, function () {
  console.log('Aplicação utilizando a porta 3000');
});