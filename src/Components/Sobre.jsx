import React from 'react';
import * as S from './Style.jsx';
import Vnw from './ImagensPortfolio/vnw.png';
import Css from './ImagensPortfolio/css.png';
import Js from './ImagensPortfolio/js.png';
import Html from './ImagensPortfolio/html.png';
import Rct from './ImagensPortfolio/react.png';
import Styled from './ImagensPortfolio/styled.jpg';


function Sobre() {
  return (
    <S.MainSobre>
      <S.SectionDoSobre>
        <h2>ESTUDOS</h2>
        <S.Card>
          <S.DivCard>
            <h2>Desenvolvimento Front-End</h2>
            <h3>AGO/2023 - MAIO/2024</h3>
            <img src={Vnw} alt="Logo do vnw" />
          </S.DivCard>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>HABILIDADES</h2>
        <S.Card>
          <S.DivCard2>
            <div>
              <img src={Css} alt="logo css3" />
              <h3>Css3</h3>
            </div>

            <div>              
              <img src={Html} alt="logo html5" />
              <h3>Html5</h3>
            </div>

            <div>              
              <img src={Js} alt="logo javascript" />
              <h3>JavaScript</h3>
            </div>

            <div>
              <img src={Rct} alt="React Biblioteca de estilo do JvaScript" />
              <h3>React</h3>
            </div>

            <div>              
              <img src={Styled} alt="logo html5" />
              <h3>Styled Components</h3>
            </div>
          </S.DivCard2>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>PROFISSIONAL</h2>
        <S.Card>
          <S.DivCard3>
            <S.Ul>
            <li>Atendente;</li>
              <li>Vendedora;</li>
              <li>Organizadora de Eventos(familiar);</li>
              <li>Empreendedora e Doceira.</li>
            </S.Ul>
          
          </S.DivCard3>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionPA>
      <S.DivCard4>
        <h1>Um pouco sobre mim</h1>
        <S.P>Olá, me chamo Raquel Dálete tenho 27 anos, sou natural do Distrito Federal. Casada com o Gustavo, tenho 2 filhos (Sírius e Noah), sou Empreendedora há 2 anos e 5 meses, faço doces para a empresa Doces Bright que eu e meu esposo fundamos em dezembro de 2021. Como CLT eu trabalhei com atendimento ao público, algumas das funções que executei foram: Vendedora, Caixa e Recepcionista. Sempre tive facilidade em me comunicar e gerar conexão. Movida por motivos de buscar mais estabilidade financeira e aprender algo novo me deparei com a área da tecnologia e através do Vai na Web, pude descobrir uma carreira que me identifico, que posso crescer e ampliar meus horizontes. Minha maior realização é estar presente na vida dos meus filhos e poder oferecer a eles as melhores experiências, estou focada em ser minha melhor versão e poder alcançar minhas metas. Meu foco no momento é me especializar como Desenvolvedora Front-End e Design Responsivo. Desistir não é uma opção, Vamos pra cima!!</S.P>
        </S.DivCard4>
      </S.SectionPA>
    </S.MainSobre>
  );
}

export default Sobre;
