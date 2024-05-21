require('dotenv').config()
const express = require('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())

// Cada variável fica acessível como uma propriedade do objeto process.env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

// Criacao de um Pool de conexoes
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    //se todas as conexões estiverem ocupadas, novos solicitantes esperam numa fila
    //se configurado com false, causa um erro quando recebe requisições e todas
    //as conexões estão ocupadas
    waitForConnections: true,
    //no máximo 10 conexões. Elas são abertas sob demanda e não no momento de
    //construção do pool
    connectionLimit: 10,
    //quantos solicitantes podem aguardar na fila? 0 significa que não há limite
    queueLimit: 0
})

// Recebe perguntas do Chat:
app.get('/perguntas', (req, res) => {
    pool.query('SELECT * FROM tb_perguntas', (err, results, fields) => {
        res.json(results)
    })

})

app.post('/perguntas', (req, res) => {
    const pergunta = req.body.pergunta
    const sql = "INSERT INTO tb_perguntas (pergunta) VALUES ("
        + pergunta + "')"
    pool.query(sql,
        [pergunta], //placeholders
        (err, results, fields) => {
            console.log(results)
            console.log(fields)
            res.send('ok')
        })
})


// Recebe respostas:
app.get('/respostas', (req, res) => {
    pool.query('SELECT * FROM tb_respostas', (err, results, fields) => {
        res.json(results)
    })
})


const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))