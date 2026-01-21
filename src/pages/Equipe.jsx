export default function Equipe() {
  const Equipe = [
    { nome: "Douglas Machado", cargo: "Pintor" },
    { nome: "Luciana Barreto F. Machado", cargo: "Pintora" },
  ];

  return (
    <section>
      <h2>Nossa Equipe</h2>

      {Equipe.map((pessoa, i) => (
        <div className="card" key={i}>
          <strong>{pessoa.nome}</strong>
          <p>{pessoa.cargo}</p>
        </div>
      ))}
    </section>
  );
}
