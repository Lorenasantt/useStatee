import { useState } from 'react'

export function Button(){
    const [MostrarTexto, setMostrarTexto] = useState(true)
    
    function Mudanca(){
        MostrarTexto === true ? setMostrarTexto(false) : setMostrarTexto(true)
    }


    return(
        <div>
        <button onClick={() => Mudanca()}>
        {MostrarTexto ? 'Mostrar' : 'Esconder'} texto
        </button>
        {MostrarTexto && <p>Texto</p>}
        </div>
    )
}