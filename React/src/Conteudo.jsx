import './App.css';
import dados from './dados.json';
import { useEffect, useState } from 'react';

function Conteudo({ slideAtual, setSlideAtual }) {
    const [textoDigitado, setTextoDigitado] = useState('');

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

    useEffect(() => {
        setTextoDigitado(''); // Reset do texto ao mudar de slide
        let index = 0;
        const texto = itemAtual.conteudo;
        let timeoutId;

        function typeEffect() {
            if (index < texto.length) {
                setTextoDigitado(prev => prev + texto.charAt(index));
                index++;
                timeoutId = setTimeout(typeEffect, 80);
            }
        }

        typeEffect();

        return () => clearTimeout(timeoutId);
    }, [slideAtual, itemAtual.conteudo]);

    return (
        <div className="Conteudo">
            <button onClick={voltar}>Voltar</button>
            <div className="text">
                <h1>{itemAtual.titulo}</h1>
                <p>{textoDigitado}</p>
            </div>
            <button onClick={avancar}>Avançar</button>
        </div>
    );
}

export default Conteudo;