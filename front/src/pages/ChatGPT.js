import React, { useState, useEffect } from 'react';
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
            <div className="container my-4 container text-center min-vw-100">
                <h1>Estude com o ChatGPT</h1>
                <hr />
                <p className='fw-bold'>Dúvidas? Pergunte :)</p>
                <hr />

                <main className="container my-4 ">

                    {/* Retangulo principal */}
                    <div class="row justify-content-center w-100 p-3 ">
                        <section class="col-md-8">
                            <article class="card">
                                <div class="p-5 text-dark-emphasis bg-light border border-dark-subtle rounded-3">



                                    {/* Resposta do ChatGPT */}
                                    {response && (
                                        <div className="mt-3">
                                            <h5>Resposta do ChatGPT:</h5>
                                            <p>{response}</p>
                                        </div>
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
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="button" onClick={handleSendQuestion}>Enviar</button>
                                        </div>
                                    </div>

                                    {/* Histórico de Perguntas e Respostas: */}
                                    <div className="my-5">
                                        <h5>Histórico de Perguntas e Respostas:</h5>
                                        <ul>
                                            {history.map((item) => (
                                                <li key={item.id_pergunta}>
                                                    <strong>Pergunta:</strong> {item.pergunta}<br />
                                                    <strong>Resposta:</strong> {item.resposta}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                </div>
                            </article>
                        </section>
                    </div>

                </main>
            </div>

            <Footer />

        </div>
    );
}

export default ChatGPT;