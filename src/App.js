import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

// lista de objetos 
  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovacao e Gestao',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome )} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => 
      <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />
      )}
      
      {/* <Time nome="Programacao"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/> */}
      <Rodape/>


    </div>
  );
}

export default App;


// argumento da funcao map: item 'retorna (=>)' o que 'e pra retornar
// estado 'e um gatilho para renderizar