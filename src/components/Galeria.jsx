import React from 'react';
import './Galeria.css';

/**
 * IMPORTANTE: 
 * 1. Removi o import da pasta que estava causando o erro no plugin:vite:import-analysis.
 * 2. O comando abaixo lê todas as imagens da pasta automaticamente.
 */
const imagensGlob = import.meta.glob('../assets/images/fotos/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { eager: true });
const imagens = Object.values(imagensGlob).map((modulo) => modulo.default);

export default function Galeria() {
  return (
    <div className="container-galeria">
      <h2 className="titulo-galeria">Nosso Trabalho</h2>
      
      {imagens.length === 0 ? (
        <div className="aviso-erro">
          <p>Nenhuma foto encontrada!</p>
          <small>Verifique se as fotos estão em: src/assets/images/fotos/</small>
        </div>
      ) : (
        <div className="minha-galeria-grid">
          {imagens.map((url, index) => (
            <div key={index} className="foto-item">
              <img 
                src={url} 
                alt={`Trabalho Douglas Pinturas ${index + 1}`} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}