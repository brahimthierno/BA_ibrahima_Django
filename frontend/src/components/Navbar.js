import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Gestion des Tâches</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Connexion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Inscription</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Tableau de Bord</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;