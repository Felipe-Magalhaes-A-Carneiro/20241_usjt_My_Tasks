import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';


function ChatGPT() {
  return (
    <div>

      <Navbar />

      {/* Corpo do ChatGPT */}
      {/* Titulo */}
      <div className="container my-4 container text-center min-vw-100">
        <h1>Estude com o ChatGPT</h1>
        <hr />
        <p>Dúvidas? Pergunte :)</p>
        <hr />

        <main className="container my-4 ">

          {/* Retangulo principal */}
          <div class="row justify-content-center w-100 p-3 ">
            <section class="col-md-8">
              <article class="card">
                <div class="p-5 text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-3">

                  {/* Input - Reposta do ChatGPT */}
                  <div class="container ">
                    <div class="row">
                      <div class="col-md-15">
                        <input type="text" class="form-control transparent-input " placeholder="Olá! no que eu posso te ajudar?"></input>
                      </div>
                    </div>
                  </div>


                  {/* input e botao Enviar */}
                  <div class="input-group mt-3">
                    <input type="text" class="form-control " placeholder="Digite a sua pergunta..."></input>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">Enviar</button>
                    </div>
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