import React from 'react';
import Perfil from './ImagensPortfolio/Selfie.jpg';
import Linkedin from './ImagensPortfolio/Linkedin.png';
import Github from './ImagensPortfolio/github.png';

import * as S from './Style.jsx';

function Inicio() {
  return (
    <S.SectionInicio>
      <S.Perfil src={Perfil} alt="foto de perfil mulher branca, com cabelo curto" />

      <S.ContainerDivs> 
      <S.BoxInicio>
        <h2>Olá, eu sou a Raquel Dálete </h2>
        <h1>Desenvolvedora Front-End</h1>
        <h2>Venham navegar pelo o meu Portfólio</h2>
      </S.BoxInicio>

      <div>
      <a href="https://www.linkedin.com/in/raquel-d%C3%A1lete/ " target="_blanque" > <S.Img src={Linkedin} alt="logo Linkedin"/> </a>
      <a href="https://github.com/RaquelDalete "  target="_blanque"> <S.Img src={Github} alt="logo Github"/> </a>
      </div>
      </S.ContainerDivs> 
    </S.SectionInicio>
   
  );
}

export default Inicio;
