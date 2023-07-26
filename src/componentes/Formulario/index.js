import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {


// definir os states de cada campo -> coloca o valor dele como valor={x} no respectivo CampoTexto
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


// quando o evento 'ao salvar' for chamado, deve ser executado essa funcao/constante
    const aoSalvar = (evento) => {
        evento.preventDefault() // metodo que evita o comportamento padrao
        // console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
        //para limpar o estado do formulario:
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao> Criar Card </Botao>
            </form>
        </section>
    )
}

export default Formulario

// se usar {props.texto} no Botao, aqui usa <Botao texto="Criar Card"/>
// se usar {props.children} no Botao, aqui usa <Botao> Criar Card </Botao> -> usando o 'children' se coloca o conteudo no meio (texto, imagem, etc)