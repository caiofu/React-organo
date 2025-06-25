import './ListaSuspensa.css';
const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label >{props.label}</label>
      <select id="lista-suspensa" required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
        <option value="" disabled>Selecione o time</option>
       {props.itens.map((item, index) => {
          return <option key={index} value={item}>{item}</option>
        }
         )}
      </select>
    </div>
  );
}
export default ListaSuspensa;