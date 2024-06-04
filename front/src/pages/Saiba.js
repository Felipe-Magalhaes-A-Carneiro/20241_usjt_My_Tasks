import React from 'react' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import '../App.css' 

function Home () {

    /* Adicione os integrantes no elemento abaixo */
    const integrantes = {
        dadosIntegrantes: [
            {
                name: 'Felipe Magalhães de Araujo Carneiro',
                funcao: 'Desenvolvedor Back-End',
                registroAluno: '823119685',
                foto: 'https://avatars.githubusercontent.com/u/111382377?v=4https://media.licdn.com/dms/image/sync/D4D27AQEarNu0KEDG_g/articleshare-shrink_480/0/1712862278930?e=1718060400&v=beta&t=mcwbimiL7SAoS12epxTU9777D8oTBTPJsCiSr7qElNo'
            },
            {
                name: 'Murilo Matos Bernardo',
                funcao: 'Desenvolvedor Full-stack',
                registroAluno: '823132278',
                foto: 'https://media.licdn.com/dms/image/D4D03AQGcDTavO8BmWQ/profile-displayphoto-shrink_800_800/0/1709588490055?e=1723075200&v=beta&t=y-MhoI01ysmobolaALp6ap1DB7CihwzFYYq65Nq8T_o'
            },
            {
              name: 'Fadel Abbas Mzannar',
              funcao: 'Desenvolvedor Front-End',
              registroAluno: '823155706',
              foto: 'https://avatars.githubusercontent.com/u/164114940?s=400&u=ccd587380b8c236d4730b2b03f134e38f79eb0db&v=4'
          },
          {
            name: 'Gustavo Evangelista Cardoso',
            funcao: 'Desenvolvedor Front-End',
            registroAluno: '823129532',
            foto: 'https://media.licdn.com/dms/image/D4D03AQHOAGe_7oPnDw/profile-displayphoto-shrink_800_800/0/1714087117333?e=1723075200&v=beta&t=ETdpe_8g69whXWR6FUXT2M5qSkfw9Ysb7USVsBjkOIM'
        },
        {
          name: 'Felipe Soares Lima',
          funcao: 'Desenvolvedor Front-End',
          registroAluno: '823127421',
          foto: 'https://media.licdn.com/dms/image/D4D03AQGtio2RHi-QcQ/profile-displayphoto-shrink_200_200/0/1692134231757?e=1723075200&v=beta&t=XZjBY-76LOOOBk7YNerrBGhnMyxmuuA_XfWTHj_lOHM'
      },
      {
        name: 'Analice Souza de Almeida Silva',
        funcao: 'Desenvolvedor Front-End',
        registroAluno: '823115451',
        foto: 'https://avatars.githubusercontent.com/u/165851141?v=4'
    },
    {
      name: 'Lucas Cezar Alcala Zenteno',
      funcao: 'Desenvolvedor Front-End ',
      registroAluno: '823144811',
      foto:'https://media.licdn.com/dms/image/D4D03AQG37LSQ55ga0w/profile-displayphoto-shrink_100_100/0/1717457666699?e=1723075200&v=beta&t=Ki_SoubVqQVOfHNGsGhWxDRVua1y032A6bKGQIa06Gk'
  },



        ]
    }

    return (
    <div>
      <Navbar />

      <main className='container my-4 min-vw-100'> 
        <div className='container text-center'> 

          
          <p className="badge fs-2 fw-bold my-4 mb-5 mt-5 p-3 text-dark text-bg-light rounded widthTitle">saiba mais</p>

        {/* Card Murilo */}
        <div className="row">
            {integrantes.dadosIntegrantes.map((integrante, index) => (
                
                <Cards
                    key={index}
                    name={integrante.name}
                    funcao={integrante.funcao}
                    registroAluno={integrante.registroAluno}
                    foto={integrante.foto}
                />
            ))}
        </div>


        </div>
      </main>

      <div class='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
