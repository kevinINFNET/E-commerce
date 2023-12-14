import React from 'react';
import Avatar from '@mui/material/Avatar';
import { format } from 'date-fns';

const avatarUrls = {
 Andre: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  Erasmo77: 'https://images.unsplash.com/photo-1508835277982-1c1b0e205603?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  Douglas: 'https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

function Perguntas({ perguntas }) {
  return (
    <section>
      <h2>Perguntas</h2>
      {perguntas.map((pergunta, index) => (
        <div key={index} className="Pergunta">
          <Avatar alt={pergunta.usuario} src={avatarUrls[pergunta.usuario]} />
          <div className="PerguntaInfo">
            <p>{pergunta.usuario}</p>
            <p>{format(new Date(pergunta.data), 'dd/MM/yyyy')}</p>
            <p>{pergunta.pergunta}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Perguntas;
