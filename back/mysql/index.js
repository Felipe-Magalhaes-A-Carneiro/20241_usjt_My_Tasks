const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

app.get("/usuario", (req, res) =>{
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'alunos',
        password: '4379',
        database: 'mytasks'
    })
    
    connection.query('select * from tb_usuario', (err, results, fields) =>{
        console.log(results);
        console.log(fields);
        res.send('ok');

    })
})

const porta = 3000;
app.listen(porta, () => console.log('Escutando na porta ${porta}'));