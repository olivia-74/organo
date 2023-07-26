//  import { useState } from 'react'
import './CampoTexto.css'
 
 const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`
    // let valor = ''
    // const [valor, setValor] = useState('') //vai retornar um array com os dois valores -> passa pro formulario

    const aoDigitado = (evento) => {
        // console.log(evento.target.value)
        //valor = evento.target.value
        // setValor(evento.target.value)
        // console.log(valor)
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            {/* <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod}/> */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod}/>
        </div>
    )
 }
 export default CampoTexto


//  usando props no input em JS puro:
//     const CampoTexto = (props) => {
//         const placeholderMod = `${props.placeholder}...`
//         return(
//             <div className="campo-texto"/>
//                 <input placeholder={placeholderMod}/>
//             </div>
//         )
//     }

// ou

// const CampoTexto = (props) => {
//     return(
//         <div className="campo-texto">
//             <label>{props.label}</label>
//             <input required={props.obrigatorio} placeholder={props.placeholder}/>
//         </div>
//     )
//  }



// required (do html) se a propriedade (props) for 'obrigatorio' (.obrigatorio), (= true)

// hook (useState): manter estado dentro da funcao, usar no lugar do let valor. value={valor} vira value={props.valor}

// estado individual de cada campo de texto (elevar o estado): mantem o estado local (que sera recebido via props)