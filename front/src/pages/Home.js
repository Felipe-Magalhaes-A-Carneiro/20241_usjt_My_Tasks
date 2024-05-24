import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1 className=' fw-bold font-family-base titulo3 p-4 mb-4 bs-success text-dark rounded widthTitle'>Aprenda Programação com ChatGPT</h1>

          <hr/>
          <p className='fw-bold , titulo2'>Faça perguntas, salve respostas e faça anotações!</p>
          <hr />
          
          <button type='button' className='w-25 p-4 mb-2btn bg-success btn-lg rounded-pill fw-bold border-black border-3 my-5'
            onClick={comecarAgora}> Começe agora! </button>
        </div>
        
        
      </main>
        <Footer />
    </div>
  );
}

export default Home;