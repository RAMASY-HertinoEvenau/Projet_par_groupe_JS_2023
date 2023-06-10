                      //Importation des scripts react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

                      //Importation du css
import './css/app.css';

                      //Importation des pages
import Acceuil from './pages/accueil';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';

                      //Importation du composant
import Navigation from '../src/composant/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Acceuil/>}/>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();