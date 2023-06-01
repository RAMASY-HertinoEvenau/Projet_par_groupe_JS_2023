import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/app.css';
import reportWebVitals from './reportWebVitals';
import Inscription from './inscription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inscription/>
  </React.StrictMode>
);
reportWebVitals();