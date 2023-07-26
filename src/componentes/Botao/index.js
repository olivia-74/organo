import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao

// "<form onSubmit={}>" com html basico: 
// const form = document.querySelector('form')
// FormData.onsubmit = ()


// {props.children} faz "o mesmo" que {props.texto} 