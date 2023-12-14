import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function DetalhesProduto({ nome, imagens, descricao, preco, avaliacao }) {
  const imagensArray = Array.isArray(imagens) ? imagens : [imagens];

  return (
    <section className="DetalhesProduto">
      <div>
        <h2>{nome}</h2>
        {descricao.split('\n').map((componente, index) => (
          <p key={index} className="descricao-componente">{componente}</p>
        ))}
        <p>Preço: R$ {preco.toFixed(2)}</p>
        <p>Avaliação: {Array.from({ length: 5 }).map((_, index) => (
          index < Math.floor(avaliacao) ? <StarIcon key={index} /> : <StarBorderIcon key={index} />
        ))}</p>
      </div>
      <div className="imagens-container">
        {imagensArray.map((imagem, index) => (
          <img key={index} src={imagem} alt={`${nome} - Imagem ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default DetalhesProduto;