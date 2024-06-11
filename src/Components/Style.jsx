 import styled from 'styled-components';


//----ESTILIZAÇÃO DA NAVEGAÇÃO

export const Nav = styled.nav`
width: 100vw;

@media (min-width: 320px) and (max-width: 768px){
        height: 30vh;
    }
`;

export const Lista = styled.ul`
width: 100%;
background-color:#2d2a2a;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
@media (min-width: 320px) and (max-width: 768px){
    display: flex; 
    flex-direction: column;
    height: 30vh;
    
}


a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    color:#a461a7;
    font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (min-width: 320px) and (max-width: 768px){
        font-size:1rem;
    }

}

`;

//ESTILIZANDO INÍCIO---------------------------

export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    border-radius: 50%;
    
`;

export const SectionInicio = styled.main`
display: flex;
width:100vw;
height:100vh;
background-color:#2d2a2a;
justify-content:space-evenly;
align-items: center;
padding-top: 3rem;

@media (min-width: 320px) and (max-width: 768px){
        height: 120vh;
    }
h2{
    color:#c8a6c2;
    margin: 1rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 100;
    font-style: normal;
  
    @media (min-width: 320px) and (max-width: 768px){
        font-size:1rem;
    }
    

}

h1{
    font-size: 4rem;
    font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;

  @media (min-width: 320px) and (max-width: 768px){
        font-size:2rem;
    }
}

@media (min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: column;
  text-align:center;
}
`

export const Img = styled.img`
width: 5vw;
margin:2rem;
margin-top: 12rem;
`;

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center;
width:50vw;
height:40vh;
margin: 1rem;



@media(min-width: 320px) and (max-width: 768px){
h2{
    text-align: center;
    font-size: 1.5rem;
}

    img{
        width: 5vw;
    }
}
`

export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;


//------------ TESTE NA NAVEGAÇÃO------------------

export const Header = styled.header`
/* background-image: url("https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg");
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 80vh; */

`;

//ESTILIZAÇAÕ SOBRE--------------------

export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
flex-wrap:wrap;
background-color:#2d2a2a;
height:150vh;

@media(min-width: 320px) and (max-width: 768px){
    height:410vh;
    display:flex;
flex-direction:column;
`;

export const SectionDoSobre = styled.section`
height: 70vh;
width: 30vw;
background-color:#2d2a2a;
margin-top: 3rem;
border-radius: 50px;
border: solid 0.5rem  #4c1040;
padding:1rem;
h2{
    text-align: center;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

}


@media(min-width: 320px) and (max-width: 768px){
    height:90vh;
    width:50vw;
  h2{
      font-size:1em;
  }
}

@media(min-width: 320px) and (max-width: 768px){
    h3{
        font-size:1rem; 
    }
}

`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;

@media(min-width: 320px) and (max-width: 768px){
    margin:0.5rem;
}
`;

export const DivCard = styled.div` 
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 20vh; 
h2{
    color: #c8a6c2;;
    margin:1rem;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

h3{
    color: #c8a6c2;;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

img{
    margin:1rem;
}

@media(min-width: 320px) and (max-width: 768px){
    margin:1rem;
}

`;

export const DivCard2 = styled.div`
width: 70%;
margin:0.8rem;
display: flex;
justify-content: space-evenly;
align-items: left;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}
h3{
    color:#c8a6c2;;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

@media(min-width: 320px) and (max-width: 768px){
    font-size:1.2rem;
}
}

img{
    width:4vw;
    margin:0.3rem;

@media(min-width: 320px) and (max-width: 768px){
    
        width:10vw;
        margin:0.2rem;

}
}
`;

export const DivCard3 = styled.div`
li{
    color:#c8a6c2;;
    font-size:1.3rem;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
    
    @media(min-width: 320px) and (max-width: 768px){
       margin:1rem;
        font-size:1.2rem;
        text-align:center;
        list-style:none;
    }
}

`;

export const Ul = styled.ul`
color:black;
`

export const SectionPA =styled.section`

background-color: #2d2a2a;
border: solid 1rem #4c1040;


`

export const DivCard4 = styled.div`
width: 100%;
height:50vh;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
height: 50vh;
padding:4rem;

h1{
    color:#c8a6c2;;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

@media(min-width: 320px) and (max-width: 768px){
  height:80vh;
}
`
export const P = styled.p`
font-size:1.3rem;
color:#c8a6c2;;
font-family: "Arvo", serif;
  font-weight: 400;
  font-style: normal;


@media(min-width: 320px) and (max-width: 768px){
    font-size:0.8rem;
    text-align: center;
}
`

// ESTILIZANDO PROJETOS--------------------------

export const SectionP = styled.section`
height:100%;
width:100%;
 background-color:#2d2a2a;
 display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;


    @media (min-width: 320px) and (max-width: 768px){
        height: 190vh;
    }


img{
    width:30vw;

    @media(min-width: 320px) and (max-width: 768px){
        widht:50vw;
    }
}

h2{
    font-size:1.2rem ;
    color:#f6f6f1;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;

@media(min-width: 320px) and (max-width: 768px){

    font-size:1rem;
}
}

h3{
    font-size:1rem ;
    color:#c8a6c2;
    margin: 1rem;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;

@media(min-width: 320px) and (max-width: 768px){

    font-size:0.8rem;
    text-align: center;
    
}
}

`

export const Div = styled.div`
display:flex;
flex-direction: column;
align-items:center;
flex:0 1 250px;
padding: 1rem;
margin: 1rem;

`
export const ImgP = styled.img`
margin-top:2rem;

`

