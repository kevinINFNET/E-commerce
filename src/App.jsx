import React from 'react';
import Header from './components/Header';
import DetalhesProduto from './components/DetalhesProduto';
import InformacoesVendedor from './components/InformacoesVendedor';
import Comentarios from './components/Comentarios';
import Perguntas from './components/Perguntas';
import ProdutosRelacionados from './components/ProdutosRelacionados';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="DetalhesEComentarios">
          <div className="DetalhesProdutoContainer">
            <DetalhesProduto
            nome="Pc gamer"
            imagens={[
                "https://images.unsplash.com/photo-1587202372583-49330a15584d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ]}
              descricao={`Rtx 3060 Gigabyte Eagle 12 Gb\nI7 9700\nSSD nvme de 500gb\nPlaca mãeGigabyte B360M Aorus Gaming\nWater Cooler Deep Cool\n16 gb de memória Ram\nFonte 600w`}
              preco={3400}
              avaliacao={5.0}
            />
          </div>

          <div className="DetalhesProdutoContainer">
            <InformacoesVendedor
              nome="Wesley Barbosa"
              email="wesley.barbosaorg2019@email.com"
              telefone="(21) 97234-5678"
              avaliacao={4.0}
            />
          </div>

          <div className="ComentariosContainer">
            <Comentarios comentarios={[
              { usuario: "JhonathanGamer", data: "2023-01-15", mensagem: "Ótimo computador! Roda tudo que eu preciso atualmente ", avaliacao: 5 },
              { usuario: "Claudio", data: "2023-01-30", mensagem: "Produto de qualidade. Meu filho amou, está rodando Fortnite no ultra.", avaliacao: 5 },
            ]} />
          </div>
        </section>

        <section>
          <Perguntas perguntas={[
            { usuario: "Andre", data: "2023-02-17", pergunta: "Quanto tempo em média para entregar?" },
          ]} />
        </section>

        <section className="DetalhesEComentarios">
          <div className="DetalhesProdutoContainer">
            <DetalhesProduto
              nome="Laptop Gamer"
              imagens={[
                "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ]}
              descricao={`Nvidia RTX 3070\nIntel i9 10ª geração\nSSD nvme de 1TB\n16GB de RAM DDR4\nTela 15.6" Full HD 144Hz`}
              preco={4500}
              avaliacao={4.8}
            />
          </div>

          <div className="DetalhesProdutoContainer">
            <InformacoesVendedor
              nome="Matheus Frazao"
              email="matheus.crossfire2019@gmail.com"
              telefone="(13) 965678-1234"
              avaliacao={4.0}
            />
          </div>

          <div className="ComentariosContainer">
            <Comentarios comentarios={[
              { usuario: "EduardoFPS", data: "2023-06-10", mensagem: "Este laptop é poderoso! Já estou jogando meus jogos favoritos sem problemas.", avaliacao: 5 },
              { usuario: "Lucas", data: "2023-06-15", mensagem: "Ótima configuração! Rodando bem os jogos pesados.", avaliacao: 4.7 },
            ]} />
          </div>
        </section>

        <section>
          <Perguntas perguntas={[
            { usuario: "Erasmo77", data: "2023-07-10", pergunta: "Qual a autonomia da bateria desse laptop?" },
            { usuario: "Douglas", data: "2023-07-15", pergunta: "Posso atualizar a quantidade de RAM neste laptop?" },
          ]} />
        </section>

        <section>
          <ProdutosRelacionados produtos={[
            { nome: "Placa de vídeo amd 6600xt", imagem: "https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", preco: 1900 },
            { nome: "Processador Ryzen 7 3700x", imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", preco: 2400 },
            { nome: "Mouse G Pro versão  2023", imagem: "https://images.unsplash.com/photo-1616071358846-9f34f471815d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", preco: 600 },
            { nome: "Teclado Mecânico TKL19.1", imagem: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", preco: 300 },
          ]} />
        </section>
<section>
  <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
    <Pagination count={15} />
  </Stack>
</section>
</main>
</div>
);
}

export default App;