import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import logo from './logo.svg'; // Logo de l'application
import './App.css'; // Styles globaux

const App = () => {
  return (
    <Router>
      {/* En-tête de l'application */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur l'application de gestion des tâches collaboratives.
        </p>
      </header>

      {/* Barre de navigation */}
      <Navbar />

      {/* Contenu principal */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </div>

      {/* Pied de page */}
      <Footer />

      {/* Lien pour apprendre React (optionnel) */}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Router>
  );
};

export default App;