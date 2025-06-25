import './Botao.css';

const Botao = (props) => {
    const aoClicar = () => {
        console.log('Clicou no botão', props.children);
    }

    return (
        <button className="botao" onClick={aoClicar}>
            {props.children}
        </button>
    );
}
export default Botao;