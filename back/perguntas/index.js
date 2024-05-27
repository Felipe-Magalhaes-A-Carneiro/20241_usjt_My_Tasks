const express = require('express');
const app = express();
const perguntas = {};
app.use(express.json()); //Obs: Diferente da apostila, será usado o json em tudo, logo não terá o 'const bodyParser = require(body-parse);', na página 25 da apostila '03_apostila_microservicoes'
contador = 0;


//Requisições e métodos HTTP do microsserviço de perguntas utilizando o "protocolo HTTP":

// Método HTTP: GET. Padrão de acesso: /perguntas. Corpo: vazio. Atividade: Obter a lista de perguntas
app.get('/perguntas', (req, res) => {
    res.send(perguntas);
});

// Método HTTP: PUT. Padrão de acesso: /perguntas. Corpo: {texto:string}. Atividade: Criar uma pergunta.
app.post('/perguntas', (req, res) => { // na apostila não foi usado post, mas com o Andeson, usaremos post
    contador++;
    const { texto } = req.body;
    perguntas[contador] = {
        contador, texto
    }
    res.status(201).send(perguntas[contador]);

});

//Porta aberta para que a API 'escute' os dados
app.listen(5000, () => {
    console.log('Pergunte ao ChatGPT. Porta 5000')
});