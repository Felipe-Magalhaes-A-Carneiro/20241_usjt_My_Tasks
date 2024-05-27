import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import { FaComputer } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";

function Home() {
  return (
    <div>
      <Navbar />

      <main className="container my-4 min-vw-100">
        <br />
        <div className="container text-center">
          <h1 className=' fw-bold font-family-base titulo3 p-4 mb-4 bs-success text-dark rounded widthTitle'>Aprenda Programação com ChatGPT</h1>

          <hr/>
          <p className='titulo2'>Faça perguntas, salve respostas e faça anotações!</p>
          <hr />

          <FaComputer size={100} class="rounded float-start mb-6 img-fluid" alt="computer" />
          <GiProcessor size={100} class="rounded float-end mb-6 img-fluid" alt="process" />

            <Link to = "/chatgpt">
            <button type='button' className='w-25 p-4 mb-2 btn bg-success btn-lg rounded-pill fw-bold border-black border-3 my-5'>
              Comece agora!
            </button>
          </Link>

          <p className='font-family-base titulo3 p-5 rounded widthTitle fs-4'>Bem-vindo ao nosso portal de aprendizado de programação! Aqui, você pode conversar com o ChatGPT para esclarecer dúvidas, receber explicações detalhadas e obter ajuda personalizada em tempo real. Aproveite essa ferramenta inteligente para aprimorar suas habilidades de programação de maneira prática e eficiente.</p>

        </div>
      </main>

      <div class='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default Home;