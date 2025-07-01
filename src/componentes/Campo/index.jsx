import { useState } from 'react';
import './Campo.css';
const Campo = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  }
  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input  
        onChange={aoDigitado} 
        type={props.type} 
        placeholder={props.placeholder} 
        required={props.obrigatorio} 
        value={props.valor}
      />
    </div>
  );
}
export default Campo;