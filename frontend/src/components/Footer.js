import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Mon Application React. Tous droits réservés.
        </p>
        <p className="mb-0">
          <a href="/mentions-legales" className="text-white">Mentions légales</a> |{' '}
          <a href="/politique-de-confidentialite" className="text-white">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;