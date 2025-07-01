import { useState } from 'react'

import Banner from './componentes/Banner'

import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',

    },
    {
      id: uuidv4(),
      nome: 'Frontend',
      cor: '#82cffa',

    }, {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',

    }, {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',

    }, {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6bbf',

    }, {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',

    }, {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',

    }
  ])
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function aoDeletarColaborador(prop) {
    console.log('Deletar colaborador:');
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {

      if (time.id === id) {
        time.cor = cor
        console.log('Cor do time alterada:', time.nome, 'para', cor);
        //time.corSecundaria = corSecundaria
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  return (

    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map(time =>
          <Time
            key={time.nome}
            nome_time={time.nome}
            cor={time.cor}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={aoDeletarColaborador}
            mudarCor={mudarCorTime}
            id={time.id}
          />)}
      </section>
    </div>

  )
}

export default App
