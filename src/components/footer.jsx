import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BLOCO 1 */}
        <div className="footer-col">
          <h3>Douglas Pinturas</h3>
          <p>
            Pintura residencial e comercial com qualidade, pontualidade e
            acabamento profissional.
          </p>
        </div>

        {/* BLOCO 2 */}
        <div className="footer-col">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Equipe">Equipe</Link>
            </li>
            <li>
              <Link to="/Orcamento">Orçamento</Link>
            </li>
            <li>
              <Link to="/Oportunidade">Oportunidades</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Galeria">Galeria</Link>
            </li>
          </ul>
        </div>

        {/* BLOCO 3 */}
        <div className="footer-col">
          <h3>Contato</h3>
          <p>📞 (15) 99770-8673</p>
          <p>📍 Cerquilho / SP</p>

          <a
            href="https://wa.me/5515997708673"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Douglas Pinturas. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
