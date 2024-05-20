import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';


const comecarAgora = () => {
  //Função de testes;
  if (window.confirm("Pronto para iniciar seu aprendizado?")) {
    window.open("https://chat.openai.com/");
  }

}

function Home() {
  return (
    <div>
      <Navbar />

      <main className="container my-4 min-vw-100">
        <br />
        <div className="container text-center">
          <h1 className=' fw-bold p-4 mb-2 bg-light text-dark rounded widthTitle'>Aprenda Programação com ChatGPT</h1>

          <hr />

          <p >Faça perguntas, salve respostas e faça anotações!</p>

          <button type='button' className='w-25 p-3 mb-2btn bg-success-subtle btn-lg rounded-pill fw-bold border border-1'
            onClick={comecarAgora}> Começe agora! </button>
        </div>
        
        
      </main>

      <Footer />
    </div>
  );
}

export default Home;