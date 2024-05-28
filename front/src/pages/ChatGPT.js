import React, { useState, useEffect } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';

function ChatGPT() {
    const [userQuestion, setUserQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [history, setHistory] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendQuestion();
        }
    };

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

    const fetchHistory = async () => {
        try {
            const res = await fetch('http://localhost:3000/perguntas');
            const data = await res.json();
            setHistory(Array.isArray(data) ? data : []);
            console.log(data);
        } catch (error) {
            console.error('Erro ao buscar o histórico:', error);
            setHistory([]); // Define `history` como um array vazio em caso de erro
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container my-4 min-vw-100 my-5">
                <h1 className="text-center fw-bolder my-5">Estude com o ChatGPT</h1>
                <hr />
                <p className="text-center titulo2">Dúvidas? Pergunte :)</p>
                <hr />
                <div className="row justify-content-md-center">
                    <aside className="col-md-3 mb-5">
                        <div className="card p-5 md-5 mb-5 my-5">
                            <h5>Histórico de Perguntas e Respostas:</h5>
                            <hr />
                            <ScrollPanel style={{ width: '100%', height: '300px' }} className="custombar2">
                                <ul>
                                    {history.map((item) => (
                                        <li key={item.id_pergunta}>
                                            <strong>Pergunta:</strong>
                                            <p className="p-1">{item.pergunta}</p>
                                            <br />
                                            <strong>Resposta:</strong>
                                            <p className="p-1">{item.resposta}</p>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollPanel>
                        </div>
                    </aside>
                    <main className="col-md-6">
                        <article className="card mb-5 my-5">
                            <div className="p-5 text-dark-emphasis bg-body border border-dark-subtle rounded-3">
                                <h5>Resposta do ChatGPT:</h5>
                                {response && (
                                    <ScrollPanel style={{ width: '100%', height: '100px' }} className="custombar1">
                                        <p>{response}</p>
                                    </ScrollPanel>
                                )}
                                <div className="input-group mt-3">
                                    <input
                                        type="text"
                                        className="input-group-prepend form-control border-black border-1"
                                        placeholder="Digite a sua pergunta..."
                                        value={userQuestion}
                                        onChange={handleQuestionChange}
                                        onKeyDown={handleKeyDown}
                                    />
                                    <button id="btnEnviarPergunta" className="p-inputgroup-addon btn bg-verde border-black border-1" type="button" onClick={handleSendQuestion}>Enviar</button>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default ChatGPT;
