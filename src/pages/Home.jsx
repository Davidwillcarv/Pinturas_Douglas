import Galeria from "../components/Galeria";
import fachada from "../assets/images/fachada.jpeg";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Douglas Pinturas</h1>
          <p>Transformamos casas e comércios com cor, cuidado e respeito.</p>
        </div>

        <img src={fachada} alt="Fachada Douglas Pinturas" />
      </section>

      {/* SOBRE */}
      <section className="box">
        <h2>Sobre Nós</h2>

        <p>
          A <strong>Douglas Pinturas</strong> nasceu de um sonho simples:
          transformar ambientes com qualidade, pontualidade e preço justo.
        </p>

        <p>
          Desde 2015, já realizamos mais de{" "}
          <strong>800 pinturas residenciais e comerciais</strong>, sempre com o
          mesmo compromisso: só sair quando o cliente estiver 100% satisfeito.
        </p>
      </section>

      {/* PILARES */}
      <section className="box">
        <h2>Nossos pilares</h2>

        <div className="grid">
          <div className="card">✔ Qualidade sem desculpas</div>
          <div className="card">✔ Pontualidade no prazo combinado</div>
          <div className="card">✔ Transparência no orçamento</div>
          <div className="card">✔ Respeito ao seu espaço</div>
          <div className="card">✔ Tintas premium e ecológicas</div>
        </div>
      </section>

      <section className="box">
        <h2>Nossos Serviços</h2>

        <div className="servicos-grid">
          <div className="servico-card">
            <h3>Pintura Residencial</h3>
            <p>
              Pintura interna e externa de casas e apartamentos, com acabamento
              fino, proteção dos móveis e limpeza ao final do serviço.
            </p>
          </div>

          <div className="servico-card">
            <h3>Pintura Comercial</h3>
            <p>
              Pintura de lojas, salas comerciais, escritórios e galpões,
              respeitando prazos e mantendo o ambiente organizado.
            </p>
          </div>

          <div className="servico-card">
            <h3>Pintura Interna</h3>
            <p>
              Quartos, salas, cozinhas, banheiros e corredores, utilizando
              tintas de qualidade e baixo odor.
            </p>
          </div>

          <div className="servico-card">
            <h3>Pintura Externa</h3>
            <p>
              Fachadas, muros e áreas externas, com preparação adequada da
              superfície para maior durabilidade.
            </p>
          </div>

          <div className="servico-card">
            <h3>Restauração e Manutenção</h3>
            <p>
              Correção de infiltrações, descascados, trincas e manutenção de
              pinturas antigas.
            </p>
          </div>

          <div className="servico-card">
            <h3>Acabamentos Especiais</h3>
            <p>
              Aplicação de grafiato, textura, massa corrida e outros acabamentos
              decorativos.
            </p>
          </div>
        </div>
      </section>

      <Galeria />
    </>
  );
}
