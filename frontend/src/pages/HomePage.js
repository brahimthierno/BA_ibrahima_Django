import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Bienvenue sur l'application de gestion des tâches collaboratives</h1>
      <p>Cette application permet de gérer des projets et des tâches en équipe.</p>
      <Link to="/login" className="btn btn-primary me-2">Connexion</Link>
      <Link to="/register" className="btn btn-secondary">Inscription</Link>
    </div>
  );
};

export default HomePage;