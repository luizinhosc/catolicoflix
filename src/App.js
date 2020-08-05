import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/Menu/components/BannerMain';
import Carousel from './components/Menu/components/Carousel';
import Footer from './components/Menu/components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
    
    <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Um guia para os melhores conteudos católicos da internet🙏🙏🙏🙏🙏🙏"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default App;
