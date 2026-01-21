import  { useState } from "react";


export default function Oportunidade() {
 // 1. Estado para os dados do candidato
  const [candidato, setCandidato] = useState({
    nome: "",
    vaga: "Pintor", // Valor padrão
    experiencia: "",
    telefone: ""
  });
    
  const enviarCandidatura = (e) => {
    e.preventDefault();
    
    const numeroOficial = "5515997708673"; // Seu número

    // 2. Montagem da mensagem focada em RH
    const mensagem = `*Nova Candidatura de Emprego*%0A%0A` +
                     `*Nome:* ${candidato.nome}%0A` +
                     `*Vaga de Interesse:* ${candidato.vaga}%0A` +
                     `*Telefone:* ${candidato.telefone}%0A` +
                     `*Experiência:* ${candidato.experiencia}`;

    const url = `https://wa.me/${numeroOficial}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  return (
    <section className="oportunidade-container">
      <h2>Trabalhe Conosco</h2>
      <p>Preencha os dados abaixo para enviar seu currículo via WhatsApp.</p>

      <form className="oportunidade-form" onSubmit={enviarCandidatura}>
        <div className="form-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            placeholder="Seu nome completo"
            value={candidato.nome}
            onChange={(e) => setCandidato({...candidato, nome: e.target.value})}
            required 
          />
        </div>

        <div className="form-group">
          <label>Vaga de Interesse</label>
          <select 
            value={candidato.vaga}
            onChange={(e) => setCandidato({...candidato, vaga: e.target.value})}
          >
            <option value="Pintor">Pintor</option>
            <option value="Ajudante">Ajudante</option>
            
          </select>
        </div>

        <div className="form-group">
          <label>Telefone para Contato</label>
          <input 
            type="tel" 
            placeholder="(15) 99999-9999"
            value={candidato.telefone}
            onChange={(e) => setCandidato({...candidato, telefone: e.target.value})}
            required 
          />
        </div>

        <div className="form-group">
          <label>Resumo da sua Experiência</label>
          <textarea 
            placeholder="Conte um pouco sobre onde já trabalhou..."
            rows="5"
            value={candidato.experiencia}
            onChange={(e) => setCandidato({...candidato, experiencia: e.target.value})}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-vaga">
          Enviar Candidatura via WhatsApp
        </button>
      </form>
    </section>
  );
}