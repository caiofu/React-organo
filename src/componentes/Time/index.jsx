import './Time.css';
import hextoRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';

const Time = (props) => {
  //console.log("Teste ->", props.cor)
  return (  
    props.colaboradores.length > 0 &&
    
    <section className="time" style={{ backgroundColor: hextoRgba( props.cor, '0.6')} }>
        <input type="color" value={props.cor} className='input-cor' 
        onChange={evento => props.mudarCor(evento.target.value, props.id) } />
        <h3 style={{borderColor: props.cor}} >{props.nome_time}</h3>
        <div className='colaboradores'>
          {props.colaboradores.map(colaborador => {
            // console.log('Renderizando colaborador:', <Colaborador 
            //   key={colaborador.nome} 
            //   nome={colaborador.nome} 
            //   cargo={colaborador.cargo} 
            //   imagem={colaborador.imagem} 
            //   corDeFundo={props.cor}
            //   aoDeletar={props.aoDeletar}
            // />);
            return <Colaborador 
              key={colaborador.nome} 
              nome={colaborador.nome} 
              cargo={colaborador.cargo} 
              imagem={colaborador.imagem} 
              corDeFundo={props.cor}
              aoDeletar={props.aoDeletar}
            />
          })}
        </div>
    </section>
  );
}
export default Time;