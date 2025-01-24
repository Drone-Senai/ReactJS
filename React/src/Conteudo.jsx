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
            <h1>{itemAtual.titulo}</h1>
            <p>{itemAtual.conteudo}</p>


            <div className="Botoes">
        <button onClick={voltar}>Anterior</button>
        <button onClick={avancar}>Próximo</button>
      </div>
        </div>

        </>

    )

}

export default Conteudo