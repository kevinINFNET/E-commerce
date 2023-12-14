import React from 'react';

function InformacoesVendedor({ nome, email, telefone, avaliacao }) {
  return (
    <section className="InformacoesVendedor">
      <h2>Informações do Vendedor</h2>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
      <p>Avaliação: {avaliacao}</p>
    </section>
  );
}

export default InformacoesVendedor;