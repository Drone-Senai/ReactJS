import '../styles/App.css'
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types'

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

Cabecalho.propTypes = {
    slideAtual: PropTypes.int.isRequired
  }

export default Cabecalho