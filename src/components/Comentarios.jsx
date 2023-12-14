import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { format } from 'date-fns';

const avatarUrls = {
  JhonathanGamer: 'https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  Claudio: 'https://plus.unsplash.com/premium_photo-1664301676077-6c226b2d6dcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  EduardoFPS: 'https://images.unsplash.com/photo-1593229874334-90d965f27c42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  Lucas: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

function Comentarios({ comentarios }) {
  return (
    <section>
      <h2>Comentários</h2>
      {comentarios.map((comentario, index) => (
        <div key={index} className="Comentario">
          <Avatar alt={comentario.usuario} src={avatarUrls[comentario.usuario]} />
          <div className="ComentarioInfo">
            <p>{comentario.usuario}</p>
            <p>{format(new Date(comentario.data), 'dd/MM/yyyy')}</p>
            <p>{comentario.mensagem}</p>
            <p>Avaliação: {Array.from({ length: 5 }).map((_, i) => (
              i < Math.floor(comentario.avaliacao) ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
            ))}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comentarios;
