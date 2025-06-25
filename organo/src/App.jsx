import { useState } from 'react'

import Banner from './componentes/Banner'

import Formulario from './componentes/Formulario'
import Time from './componentes/Time'

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Frontend',
      corPrimaria: '#82cffa',
      corSecundaria: '#E8F8FF'
    },{
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },{
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#FDE7E8'
    },{
      nome: 'UX e Design',
      corPrimaria: '#db6bbf',
      corSecundaria: '#FAE9F5'
    },{
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#FFF5D9'
    },{
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#FFEEDF'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    
  }
  return (

    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        {times.map(time => <Time
          key={time.nome} 
          nome_time={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </div>

  )
}

export default App
