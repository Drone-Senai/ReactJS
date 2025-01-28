import './App.css'
import logo from './assets/logo.svg';

function Cabecalho({slideAtual}){

    return (
    <>
        <div className='Cabecalho'>
            <img src={logo} alt="Logo" id='logoCabecalho' />
            <hr />
            <p>Slide {slideAtual + 1}</p>
        </div>

    </>

    )

}

export default Cabecalho