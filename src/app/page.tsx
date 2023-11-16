// Essa basicamente é a pagina onde as outras paginas serão inseridas, ou roteadas

import Home from '../app/Pages/home';
import Fila from '../app/Pages/fila';

import React from 'react';

const Hello = () => {
  return (
    <div>
      <Home />
      <Fila/>
    </div>
  );
};

export default Hello;

