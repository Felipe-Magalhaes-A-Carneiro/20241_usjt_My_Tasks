import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light bg-gradient">
      <div className="container-fluid ">

        <a className="navbar-brand  text-dark" href="#">MyTasks</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Respostas</a>
            </li>

          </ul>
        </div>

        <div className="text-end">
          <li className=" navbar-nav nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </li>
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar