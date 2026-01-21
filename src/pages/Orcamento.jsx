import cadastro from "../assets/images/cadastro.jpeg";
import React, { useState } from "react";

export default function Orcamento() {
  // 1. Estado unificado com todos os seus campos
  const [dados, setDados] = useState({ 
    nome: "", 
    email: "", 
    telefone: "", 
    cidade: "", 
    detalhes: "" 
  });

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    
    // Remova o "+" do número para o link do WhatsApp funcionar melhor
    const numero = "5515997708673"; 

    // 2. Montagem da mensagem com todos os dados preenchidos
    const mensagem = `*Solicitação de Orçamento*%0A%0A` +
                     `*Nome:* ${dados.nome}%0A` +
                     `*E-mail:* ${dados.email}%0A` +
                     `*Telefone:* ${dados.telefone}%0A` +
                     `*Cidade:* ${dados.cidade}%0A` +
                     `*Detalhes:* ${dados.detalhes}`;

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  // APENAS UM RETURN AGORA:
  return (
    <section className="orcamento-container">
      <h2>Solicite seu Orçamento</h2>

      <img src={cadastro} alt="Cadastro" className="imagem-orcamento" />

      {/* 3. Conectamos o onSubmit à nossa função corrigida */}
      <form className="orcamento-form" onSubmit={enviarWhatsApp}>
        <h3>Dados do Cliente</h3>

        <div className="form-grid">
          <div className="form-group">
            <label>Nome completo</label>
            <input 
              type="text" 
              placeholder="Ex: João da Silva" 
              value={dados.nome}
              onChange={(e) => setDados({...dados, nome: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="exemplo@email.com" 
              value={dados.email}
              onChange={(e) => setDados({...dados, email: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label>Telefone / WhatsApp</label>
            <input 
              type="tel" 
              placeholder="(15) 99999-9999" 
              value={dados.telefone}
              onChange={(e) => setDados({...dados, telefone: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label>Cidade</label>
            <input 
              type="text" 
              placeholder="Cerquilho / SP" 
              value={dados.cidade}
              onChange={(e) => setDados({...dados, cidade: e.target.value})}
              required 
            />
          </div>
        </div>

        <h3>Detalhes do Serviço</h3>

        <div className="form-group">
          <label>Descreva o que precisa...</label>
          <textarea
            placeholder="Ex: pintura interna, 3 quartos e sala..."
            rows="4"
            value={dados.detalhes}
            onChange={(e) => setDados({...dados, detalhes: e.target.value})}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar-zap">
           Enviar via WhatsApp
        </button>
      </form>
    </section>
  );
}

