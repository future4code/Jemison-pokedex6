import Rotas from './Route/Rotas';
import GlobalStyle from './Styles/globalStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './Constants/Url'

function App() {
  
  return (
    // chamar o GlobalState no lugar da div
    //<GlobalStyle> <Router> <GlobalStyle>
    <div>
      <GlobalStyle />
      <Rotas />
      </div>
  );
}

export default App;
