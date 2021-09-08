import React from 'react';

export default function Paginado({paisesPerPage, paisesSeleccionados, paginado}){
    const NumeroPage =[]

    for (let e = 1; e <= Math.ceil(paisesSeleccionados/paisesPerPage); e++) {
        NumeroPage.push(e)
    }
    return(
        <nav>
            <ul className= 'paginado'>
                {NumeroPage &&
                NumeroPage.map(N =>(
                <button key = {N}  onClick={()=> paginado(N)}>{N}</button>
                ))}
            </ul>
        </nav>
    )
}