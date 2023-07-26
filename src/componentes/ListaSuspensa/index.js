import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // console.log(props.itens)

    return(
        <div className='lista-suspensa'>
           <label>{props.label}</label>
           <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}> 
           {/* <select required={props.obrigatorio}> */}
                <option value=""></option> //
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}   
           </select>
        </div>
    )
}

export default ListaSuspensa



//  <select> e <option> sao partes do dropdown no jsx*

// {props.itens.map(item => <option>{item}</option>)}: iteracao na lista strings e retorna uma lista de elementos do jsx. Para cada item da lista, ele retorna um item novo manipulado(lista de nomes -> lista de options), percorre e devolve

// key={item}: controla a chave especifica de cada item