import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
  

  return (
    props.colaboradores.length > 0 &&
    <section className="time" style={{ backgroundColor: props.corSecundaria } }>
        <input type="color" value={props.corPrimaria} className='input-cor' 
        onChange={evento => props.mudarCor(evento.target.value, props.nome_time)} />
        <h3 style={{borderColor: props.corPrimaria}} >{props.nome_time}</h3>
        <div className='colaboradores'>
          {props.colaboradores.map(colaborador => {
            console.log('Renderizando colaborador:', <Colaborador 
              key={colaborador.nome} 
              nome={colaborador.nome} 
              cargo={colaborador.cargo} 
              imagem={colaborador.imagem} 
              corDeFundo={props.corPrimaria}
              aoDeletar={props.aoDeletar}
            />);
            return <Colaborador 
              key={colaborador.nome} 
              nome={colaborador.nome} 
              cargo={colaborador.cargo} 
              imagem={colaborador.imagem} 
              corDeFundo={props.corPrimaria}
              aoDeletar={props.aoDeletar}
            />
          })}
        </div>
    </section>
  );
}
export default Time;