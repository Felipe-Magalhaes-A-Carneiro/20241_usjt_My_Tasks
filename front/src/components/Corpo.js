import React from 'react'
const comecarAgora = () =>{
//Função de testes;
    if (window.confirm("Pronto para iniciar seu aprendizado?")) {
        window.open("https://chat.openai.com/");
      } 
    
}

const Corpo = () => {
  //rafce = atalho feito pela extenção React ES7 + React/
  return (
    <div className='d-inline-block marginBody'>
      <div className='text-center vw-100 vh-100'>
        <h3 className=' fw-bold p-3 mb-2 bg-light text-dark rounded widthTitle'>
          Aprenda Programação com ChatGPT
        </h3>
        <br />
        <span className=' p-2 mb-2 bg-dark rounded'>
          <a className='text-white text-decoration-none'>
            Faça perguntas, salve respostas e faça anotações!</a>
        </span>
        <br />
        <br />
        <button type='button' className='btn bg-verde btn-lg rounded-pill fw-bold border border-3 border-black' 
                onClick={comecarAgora}> Começe agora! </button>
      </div>
    </div>
  )
}

export default Corpo
