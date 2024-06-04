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
                name: 'Felipe Soares',
                funcao: 'Desenvolvedor Front-End',
                registroAluno: '823127421',
                foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADQQAAIBAwIDBgQFBAMAAAAAAAABAgMEEQUhEjFREzJBYXGRIlKBoUJicrHwFNHh8TM0wf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAYbwsvkZIGsVuytHFd6o+H6eIFdqN9K4m4QbVJPH6vMhD1AAAAb0qk6VRTpyakvE6Gxu1dUeLGJraS6HNknT67oXUX+GT4ZLyA6QAAAAAAAAAAAAAAAAAACn1970Y+GG/wBi4KbXsdrRT+VgVYAAAAAMcwAOotpcdClL5oJ/Y9SNp8oys6PC08QUXjqiSAAAAAAAAAAAAAAAAAOe1Vt308vklj2OgZQaysXrfWKYEIAAAAAAAF3of/Vn+t/siyK7Q1i1k+s2WIAAAAAAAAAAAAAAAAArNatlOl/UJ/FBYa6rJZmlWmqtOUJLaSwwOVBvWpSoVJU5reLx6mgAAADMVxTjHq8GCVp1CVa7ht8EHxSYF5Z26tqKpp53y35nuAAAAAAAAAAAAAAxKSisyaX1AyCPO9tqeeKtH0TyRqmr28V8CnP0WALEr7jVaNJuNNOpJbbbL3ItbWJzi406Sjlc29ysAkXlzK7mpypxTivAjnvZcLuYwn3anwP6/wAQurWpazxU3i+7LwYHgAABJsrudpKTjDijLGU9jyoUZ16ip01lvn5HpfqMK3Y0+7TXDnq/EC3oapb1WlJunL83L3JqaaynlHJk/Tb927VOq80nyfy/4AvgeFO7t57RrQb6cR78wAAAAAAAAKbVb6Xa9jQm0o95p+PQrJNy3m3J+byet4l/V1v1y/c8QAAAAADMW4TU1zTydKuzvLZOSUoTXLoc0WWkV5unUt4tKeMwz4dQI11ZqlWlGFam0vCUsNEmy0tVUqlaonHwUHn7lbNPjfH38viz1LLR3XjxyW9Jc15+QFm1TtLeThCMYxWdjmpNyk5S5vdlzrdZK3jSzvN7+iKUAAADNoznDuTlH0eDUATKOo3NJ7z449Jk+hq1Ge1WMqb680UgA6yLUllbpmSBo03OzSbzwycUTwBpUmqcJTfKKyzcg6xV7Ozkk95vh/uBRTm5zlN85NtmoAAAAAAAJWmz4b6l5vBFNqcuCrCa/DJP2YEnUpUneVeCLznDaezeOmC406VOVnT7NYWMNeZz9VYqzTecSe5O0e57KVSE38HC5/VAeerVe0vGlyguEhGXKU5OUucnlmAAAAAAAAALnQp5o1YdJZ9/9FoUehTxcTh4SiXgApNbq8deFNPuLL9WXb2OXuKnbV6lT5pP28APIAAAAAAAAAMD0r71W/mSl7pCltTqy/Kor1b/ALJmJ7wpv8uPuZfw0Ir5pZ9kB5gAAAAAAAAACVps+C+pPq8e50ZylOXBUhNfhkmdVF5WwEbUavZWdSS5tcK+pzhba5V3p0l+plSAAAAAAAAADAA2f/EvKRmquHghzxFfff8A9NVvGS9H/Pc2rPNWfrgDQAAAAAAAAAAHyOmsp9paUZeLgs+pzJd6JV4reVPm4S+zArtUk531XP4cJexFAAAAAAAAAAAADan30YMAAAAAAAAAAAABYaLJq7cfCUHkAD//2Q=='
            },
            {
                name: 'Murilo Matos Bernardo',
                funcao: 'Desenvolvedor Full-stack',
                registroAluno: '823132278',
                foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADQQAAIBAwIDBgQFBAMAAAAAAAABAgMEEQUhEjFREzJBYXGRIlKBoUJicrHwFNHh8TM0wf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAYbwsvkZIGsVuytHFd6o+H6eIFdqN9K4m4QbVJPH6vMhD1AAAAb0qk6VRTpyakvE6Gxu1dUeLGJraS6HNknT67oXUX+GT4ZLyA6QAAAAAAAAAAAAAAAAAACn1970Y+GG/wBi4KbXsdrRT+VgVYAAAAAMcwAOotpcdClL5oJ/Y9SNp8oys6PC08QUXjqiSAAAAAAAAAAAAAAAAAOe1Vt308vklj2OgZQaysXrfWKYEIAAAAAAAF3of/Vn+t/siyK7Q1i1k+s2WIAAAAAAAAAAAAAAAAArNatlOl/UJ/FBYa6rJZmlWmqtOUJLaSwwOVBvWpSoVJU5reLx6mgAAADMVxTjHq8GCVp1CVa7ht8EHxSYF5Z26tqKpp53y35nuAAAAAAAAAAAAAAxKSisyaX1AyCPO9tqeeKtH0TyRqmr28V8CnP0WALEr7jVaNJuNNOpJbbbL3ItbWJzi406Sjlc29ysAkXlzK7mpypxTivAjnvZcLuYwn3anwP6/wAQurWpazxU3i+7LwYHgAABJsrudpKTjDijLGU9jyoUZ16ip01lvn5HpfqMK3Y0+7TXDnq/EC3oapb1WlJunL83L3JqaaynlHJk/Tb927VOq80nyfy/4AvgeFO7t57RrQb6cR78wAAAAAAAAKbVb6Xa9jQm0o95p+PQrJNy3m3J+byet4l/V1v1y/c8QAAAAADMW4TU1zTydKuzvLZOSUoTXLoc0WWkV5unUt4tKeMwz4dQI11ZqlWlGFam0vCUsNEmy0tVUqlaonHwUHn7lbNPjfH38viz1LLR3XjxyW9Jc15+QFm1TtLeThCMYxWdjmpNyk5S5vdlzrdZK3jSzvN7+iKUAAADNoznDuTlH0eDUATKOo3NJ7z449Jk+hq1Ge1WMqb680UgA6yLUllbpmSBo03OzSbzwycUTwBpUmqcJTfKKyzcg6xV7Ozkk95vh/uBRTm5zlN85NtmoAAAAAAAJWmz4b6l5vBFNqcuCrCa/DJP2YEnUpUneVeCLznDaezeOmC406VOVnT7NYWMNeZz9VYqzTecSe5O0e57KVSE38HC5/VAeerVe0vGlyguEhGXKU5OUucnlmAAAAAAAAALnQp5o1YdJZ9/9FoUehTxcTh4SiXgApNbq8deFNPuLL9WXb2OXuKnbV6lT5pP28APIAAAAAAAAAMD0r71W/mSl7pCltTqy/Kor1b/ALJmJ7wpv8uPuZfw0Ir5pZ9kB5gAAAAAAAAACVps+C+pPq8e50ZylOXBUhNfhkmdVF5WwEbUavZWdSS5tcK+pzhba5V3p0l+plSAAAAAAAAADAA2f/EvKRmquHghzxFfff8A9NVvGS9H/Pc2rPNWfrgDQAAAAAAAAAAHyOmsp9paUZeLgs+pzJd6JV4reVPm4S+zArtUk531XP4cJexFAAAAAAAAAAAADan30YMAAAAAAAAAAAABYaLJq7cfCUHkAD//2Q=='
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
