import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    
    const estilos = {backgroundColor: props.corSecundaria}
    
    return(
       
       props.colaboradores.length > 0 && 
        <section className='time' style={estilos}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map(colaborador => {
                    return <Colaborador 
                                corDeFundo={props.corPrimaria}
                                key={colaborador.nome}
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem}/>})}
            </div>

           
        </section>
    )
}

export default Time



// renderizacao condicional: condicionar a section a aparecer s'o se nao for nula (escondendo times vazios) :  props.colaboradores.length > 0 &&  ...
// ou 
// (props.colaboradores.lenght > 0) ? <section className='time' style={css}
//     <h3> style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
//     <div className='colaboradores'>
//         {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem})}
//     </div>
// </section>
// : ''