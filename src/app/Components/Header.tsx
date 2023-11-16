import React from 'react';
import '../Components/styles/Header.css';

const Header = () => {
  return (
    <header className="cabecalho">
      <img src="/img/logo.png" alt="Logo" className='cabecalho_logo' /> {/*O next consegue identificar a pasta img quando ela esta no public*/}
      <h1>Prontuario Digital</h1>
      <div className="cabecalho_perfil">
        <img src="/img/perfil.jpeg" alt="Imagem Perfil" className='cabecalho_img_perfil'/>
        <a className="cabecalho_img_perfil_a" href="#">
          Meu Perfil
        </a>
      </div>
    </header>
  );
};

export default Header;
