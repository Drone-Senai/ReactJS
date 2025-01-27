
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import './App.css'
import dados from './dados.json'

function Conteudo ({ slideAtual, setSlideAtual }){

    const avancar = () => {
        if (slideAtual < dados.length - 1) {
          setSlideAtual(slideAtual + 1);
        }
      };
    
      const voltar = () => {
        if (slideAtual > 0) {
          setSlideAtual(slideAtual - 1);
        }
      };
    
      const itemAtual = dados[slideAtual];  

    return (
    
        <>
        
        <div className="Conteudo">
        <button onClick={voltar}><ChevronLeftIcon /></button>
        <div className="text">
            <h1>{itemAtual.titulo}</h1>
            <p>{itemAtual.conteudo}</p>

            </div>
        
            
            <button onClick={avancar}><ChevronRightIcon /></button>
      
        </div>

        </>

    )

}

export default Conteudo