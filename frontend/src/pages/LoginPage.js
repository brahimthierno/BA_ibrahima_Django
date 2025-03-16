import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Erreur de connexion');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Se connecter</button>
      </form>
      <p className="mt-3">Pas encore de compte ? <a href="/register">Inscrivez-vous ici</a>.</p>
    </div>
  );
};

export default LoginPage;