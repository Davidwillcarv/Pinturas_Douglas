import contatoImg from "../assets/images/entre-em-contato3.jpg";

export default function Contato() {
  return (
    <section className="box">
      <h2>Informações de Contato</h2>

      <p>
        <strong>Email:</strong> dougromachado@gmail.com
      </p>

      <p>
        <strong>Telefone:</strong> (15) 99770-8673
      </p>

      <p>
        <strong>Endereço:</strong> Rua Alfaiate Luiz Subitone, 105 –
        Cerquilho/SP
      </p>

      <p>
        <strong>CNPJ:</strong> 35.039.496/0001-91
      </p>

      <img
        src={contatoImg}
        alt="Contato Douglas Pinturas"
        className="imagem-contato"
      />
    </section>
  );
}
