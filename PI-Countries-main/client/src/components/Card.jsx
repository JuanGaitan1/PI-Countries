import React from "react";
import './styles/Card.css'

export default function Card ({name, continente, imagen, poblacion}){
    return (
        <div className = 'Card'>
            <h3>{name}</h3>
            <img src={imagen} alt='Imagen no encontrada' width='250px' height='175px'/>
            <h3>{continente}</h3>
            <h3>{poblacion}</h3>
        </div>
    )
}