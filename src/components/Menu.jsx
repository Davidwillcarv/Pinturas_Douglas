import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      style={{
        background: "#1f1f1f",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Início
      </Link>
      <Link to="/Equipe" style={{ color: "white" }}>
        Equipe
      </Link>
      <Link to="/Orcamento" style={{ color: "white" }}>
        Orçamento
      </Link>
      <Link to="/Contato" style={{ color: "white" }}>
        Contato
      </Link>
      <Link to="/Oportunidade" style={{ color: "white" }}>
        Oportunidades
      </Link>
      <Link to="/Galeria" style={{ color: "white" }}>
        Galeria de Fotos
      </Link>
    </nav>
  );
}
