// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// IMPORTANTE: Se houver um BrowserRouter aqui, REMOVA-O.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Deixe apenas o App aqui */}
  </React.StrictMode>,
)