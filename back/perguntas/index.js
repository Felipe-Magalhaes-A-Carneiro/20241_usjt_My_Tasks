const express = require('express');
const app = express();

//Requisições e métodos HTTP do microsserviço de perguntas utilizando o "protocolo HTTP":

// Método HTTP: GET. Padrão de acesso: /perguntas. Corpo: vazio. Atividade: Obter a lista de perguntas
app.get('/perguntas', (req, res) => { 

});

// Método HTTP: PUT. Padrão de acesso: /perguntas. Corpo: {texto:string}. Atividade: Criar uma pergunta.
app.put('/perguntas', (req, res) =>{

});

app.listen(4000, () =>{
    console.log('Pergunte ao ChatGPT. Porta 4000')
});