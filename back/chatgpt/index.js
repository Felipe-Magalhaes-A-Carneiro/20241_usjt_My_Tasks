require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(cors());

// Cada variável fica acessível como uma propriedade do objeto process.env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

//Criar pool de conexoes
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

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const { prompt } = req.body;
    const role = "user";
    const max_tokens = 100; //Aumentar o número de caracteres
    const model = 'gpt-3.5-turbo'

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: role, content: prompt }],
            model: model,
            max_tokens: max_tokens
        });

        const responseText = completion.choices[0].message.content;

        // Armazenar pergunta e resposta no banco de dados
        pool.query('INSERT INTO tb_perguntas (pergunta) VALUES (?)', [prompt], (err, results) => {
            if (err) throw err;

            const perguntaId = results.insertId;
            pool.query('INSERT INTO tb_respostas (id_pergunta, resposta) VALUES (?, ?)', [perguntaId, responseText], (err) => {
                if (err) throw err;
            });
        });

        res.json({ completion: responseText });
    } catch (error) {
        console.error('Erro na solicitação ao OpenAI:', error);
        res.status(500).json({ error: 'Erro ao gerar resposta!' });
    }
});

app.listen(4000, () => console.log("ChatGPT_Beckend em execução na porta 4000."));