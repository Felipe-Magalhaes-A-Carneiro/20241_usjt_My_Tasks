import React from 'react';
import { Link } from 'react-router-dom';
import { TbBrandOpenai } from "react-icons/tb";
import '../App.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light min-vw-100">

      {/* navbar */}
      {/* NOME DO SITE */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CodeLearning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navegacao */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            {/* home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* ChatGPT */}
            <li className="nav-item">
              <Link className="nav-link" to="/chatgpt">ChatGPT</Link>
            </li>
            {/* Logo da openai */}
            <div>
              <TbBrandOpenai size={30} />
              <br />

            </div>

          </ul>
          <hr />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;