import React from "react";

export default function Card ({name, continente, imagen, poblacion}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{continente}</h5>
            <img src={imagen} alt='Imagen no encontrada' width='250px' height='175px'/>
            <h6>{poblacion}</h6>
        </div>
    )
}