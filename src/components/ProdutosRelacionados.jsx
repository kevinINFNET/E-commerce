import React from 'react';

function ProdutosRelacionados({ produtos }) {
  return (
    <section className="ProdutosRelacionados">
      <h2>Produtos Relacionados</h2>
      {produtos.map((produto, index) => (
        <div key={index} className="ProdutoRelacionado">
          <p>{produto.nome}</p>
          <img src={produto.imagem} alt={produto.nome} />
          <p>Preço: R$ {produto.preco.toFixed(2)}</p>
          <button>Adicionar ao Carrinho</button>
        </div>
      ))}
    </section>
  );
}

export default ProdutosRelacionados;