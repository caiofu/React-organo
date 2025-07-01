import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) => {
  

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');
   

    const aoSalvar = (evento) => {
        evento.preventDefault(); // Evita o comportamento padrão de recarregar a página
        // Aqui você pode adicionar a lógica para salvar os dados do formulário
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('');
      setCargo('');
      setImagem('');
      setTime('');
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    type="text"
                    aoAlterado={valor => setNome(valor)} />

                <Campo
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                type="text"
                aoAlterado={valor => setCargo(valor)} />

                <Campo
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    type="text"
                    aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao >Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault(); // Evita o comportamento padrão de recarregar a página
                props.cadastrarTime({
                    nome: nomeTime,
                    cor: corTime
                });
                setNomeTime('');
                setCorTime('');
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    type="text"
                    aoAlterado={valor => setNomeTime(valor)} />

                <Campo
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    type="color"
                    aoAlterado={valor => setCorTime(valor)} 
                />

              

            
                <Botao >Criar um novo time</Botao>
            </form>
        </section>
    )
}
export default Formulario;
