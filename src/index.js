import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/fonts/FuturaNow/FuturaNowHeadline-Bd.ttf'

import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  , document.getElementById('root'));
