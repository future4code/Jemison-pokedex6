import React from 'react';
import Rotas from './Route/Rotas';
import GlobalStyle from './Styles/globalStyles';
import GlobalState from './Context/GlobalState';

function App() {

  return (
    <GlobalState>
      <Rotas />
      <GlobalStyle />
    </GlobalState>
  );
}

export default App;
