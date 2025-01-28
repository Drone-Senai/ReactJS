import { useState } from 'react'
import './App.css'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import dados from './dados.json'

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