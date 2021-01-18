import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGM89NuEEOobA/profile-displayphoto-shrink_200_200/0/1571324258499?e=1616630400&v=beta&t=ohV8dt_TiJIi3cYahp7ROqZ7E_PPJX7PKjtlA5JYdt8" 
          nome="Rene Kasper" 
          descricao="Oi, eu sou o Rene Kasper. Estudante de desenvolvimento Front-End, com foco em Javascript e uso de React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
      <CardPequeno
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGM89NuEEOobA/profile-displayphoto-shrink_200_200/0/1571324258499?e=1616630400&v=beta&t=ohV8dt_TiJIi3cYahp7ROqZ7E_PPJX7PKjtlA5JYdt8" 
          nome="Email:" 
          descricao="renerkasper@gmail.com"
        />
        <CardPequeno
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGM89NuEEOobA/profile-displayphoto-shrink_200_200/0/1571324258499?e=1616630400&v=beta&t=ohV8dt_TiJIi3cYahp7ROqZ7E_PPJX7PKjtlA5JYdt8" 
          nome="Endereço:" 
          descricao="Rua Labenu"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Freelancer" 
          descricao="Especialista de Marketing Digital, fazendo clientes crescerem através de performance digital!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Cadastra" 
          descricao="Assistente de Social Midia, onde atendi Smiles Gol, Insper, Animale e Lojas Lebes." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
