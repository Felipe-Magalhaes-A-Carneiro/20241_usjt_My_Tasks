import React, { useState, useEffect } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';


function ChatGPT() {

    const [userQuestion, setUserQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [history, setHistory] = useState([]);

    const handleQuestionChange = (e) => {
        setUserQuestion(e.target.value);
    };

    const handleSendQuestion = async () => {
        if (userQuestion.trim() === '') return;

        try {
            const res = await fetch('http://localhost:4000/pergunte-ao-chatgpt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: userQuestion })
            });

            const data = await res.json();
            setResponse(data.completion);
            fetchHistory(); // Atualizar histórico após enviar a pergunta
        } catch (error) {
            console.error('Erro ao enviar a pergunta:', error);
        }
    };

    //Criar a atualizacao após enviar uma pergunta
    const fetchHistory = async () => {
        try {
            const res = await fetch('http://localhost:5000/perguntas');
            const data = await res.json();
            setHistory(data);
        } catch (error) {
            console.error('Erro ao buscar o histórico:', error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, [])
    return (

        <div>

            <Navbar />

            {/* Corpo do ChatGPT */}
            {/* Titulo */}
            <div className="container my-4 min-vw-100 ">
                <h1 className="text-center">Estude com o ChatGPT</h1>
                <hr />
                <p className="text-center">Dúvidas? Pergunte :)</p>
                <hr />

                <div className="row">

                    {/* Histórico */}
                    <aside className="col-md-6">
                        <div className="card p-5">
                            <h5>Histórico de Perguntas e Respostas:</h5>
                            <hr />
                            <ul>
                                {history.map((item) => (
                                    <ScrollPanel style={{ width: '100%', height: '100px' }} className="custombar2"
                                        key={item.id_pergunta}>
                                        <li>
                                            <strong>Pergunta:</strong>
                                            <p>{item.pergunta}</p>
                                            <br />
                                            <strong>Resposta:</strong>
                                            <p>{item.resposta}</p>
                                        </li>
                                    </ScrollPanel>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* ChatGPT - caixa*/}
                    <main className="col-md-6">
                        <article className="card">
                            <div className="p-5 text-dark-emphasis bg-body border border-dark-subtle rounded-3  ">

                                {/* Resposta do ChatGPT */}
                                <h5>Resposta do ChatGPT:</h5>
                                {response && (
                                    <ScrollPanel style={{ width: '100%', height: '100px' }} className="custombar1">
                                        <p>{response}</p>
                                    </ScrollPanel>
                                )}

                                {/* Input e botão Enviar */}
                                <div className="input-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite a sua pergunta..."
                                        value={userQuestion}
                                        onChange={handleQuestionChange}
                                    />
                                    {/* Botao */}
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-success" type="button"
                                            onClick={handleSendQuestion}>Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>

                </div>
            </div>


            <Footer />

        </div>
    );
}

export default ChatGPT;