// index.js is the entry point primarily responsible for bootstrapping
// and mounting the top-level root component onto the DOM. 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
