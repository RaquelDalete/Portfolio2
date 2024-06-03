import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navegacao from './Components/Navegacao.jsx';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
color: white;
@import url('https://fonts.googleapis.com/css2?family=Allura&family=Anton&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Courgette&family=Dancing+Script&family=Inter:wght@100..900&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  );
}

export default App;
