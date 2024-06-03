import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import { FaComputer } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";

function Home() {
  return (
    <div>
      <Navbar />

      <main className="container my-4 min-vw-100">
        <br />
        <div className="container text-center">
          <span className="badge fs-3 fw-bold my-5 mb-4 mt-4 p-3 text-dark text-bg-light rounded widthTitle">
            Aprenda Programação com ChatGPT
          </span>
          <span className="titulo2 badge fs-5 fw-bold my-5 mb-4 mt-4 p-3  rounded">
            Faça perguntas, salve respostas e faça anotações!
          </span>
          <br />
          <FaComputer
            size={100}
            class="rounded float-start mb-6 img-fluid"
            alt="computer"
          />
          <GiProcessor
            size={100}
            class="rounded float-end mb-6 img-fluid"
            alt="process"
          />

          {/* Botões Home */}
          <div class="container">
            <div class="row">
              <Link to="/chatgpt" className="px-3">
                <button
                  type="button"
                  className="col p-3 mb-2 btn bg-verde btn-lg fw-bold border-black rounded-pill border-3 my-5">
                  Comece agora!
                </button>
              </Link> 
              <div />
            </div>

            {/* Texto auxiliar */}
            <p className="font-family-base p-5 rounded fs-4">
              Bem-vindo ao nosso portal de aprendizado de programação! Aqui,
              você pode conversar com o ChatGPT para esclarecer dúvidas, receber
              explicações detalhadas e obter ajuda personalizada em tempo real.
              Aproveite essa ferramenta inteligente para aprimorar suas
              habilidades de programação de maneira prática e eficiente.
            </p>
          </div>
        </div>
      </main>

      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
