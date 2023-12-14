import React from 'react';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">VirtuesX</div>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/products">Produtos</a></li>
          <li><a href="/cart">Carrinho</a></li>
          <li><a href="/about">Sobre Nós</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Buscar produtos..." />
        <button type="button">Buscar</button>
      </div>
    </header>
  );
}

export default Header;