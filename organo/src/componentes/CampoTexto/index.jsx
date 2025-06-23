import './CampoTexto.css';
const CampoTexto = (props) => {
  console.log(props);
  const aoDigitado = (evento) => {
    console.log(evento.target.value);
    props.aoAlterado(evento.target.value);
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aoDigitado} type="text" placeholder={props.placeholder} required={props.obrigatorio}/>
    </div>
  );
}
export default CampoTexto;