import { useState } from 'react'
import '../styles/App.css'
import Cabecalho from '../components/Cabecalho'
import Conteudo from '../components/Conteudo'
import dados from '../dados.json'

function App() {
  const [slideAtual, setSlideAtual] = useState(0); 

  const itemAtual = dados[slideAtual];  

  return (
    <>
    <div 
        className={` feed  Slide-${slideAtual}`} 
    style={{
      backgroundImage: `url(${itemAtual.imagem})`,
    }}
    >
      <Cabecalho slideAtual={slideAtual} />
      <Conteudo slideAtual={slideAtual} setSlideAtual={setSlideAtual} />
    </div>
    </>
  );
}
export default App

