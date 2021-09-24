import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";

export default function Detail(props) {
    const dispatch =  useDispatch()

useEffect(()=>{
    dispatch(getDetail(props.match.params.id))
},[dispatch, props.match.params.id])

const Pais = useSelector((state)=> state.detail)
return (
    <div>
        {
            Pais?
            <div>
                <h1>{Pais.Nombre}</h1>
                <img src = {Pais.Bandera} alt='Imagen no encontrada' width='250px' height='175px' />
                <h2>Continente: {Pais.Continente}</h2>
                <h3>Capital: {Pais.Capital}</h3>
                <h4>Subregion: {Pais.Subregion}</h4>
                <h5>Area: {Pais.Area}</h5>
                <h5>Poblacion: {Pais.Poblacion}</h5>
                <div>{Pais.Actividads?.map(element => {
                return(
                <div className='actividad'>
                <h6>Actividad: {element.name} </h6>
                
                <h6>Dificultad: {element.dificultad} </h6>
                
                <h6>Temporada: {element.temporada} </h6>
               
                <h6>Duracion: {element.duracion}</h6>
                </div>
                )})}</div>
            </div> : <p>No encontramos los detalles perdon:c</p>
        }
        <Link to='/home'><button>Volver</button></Link>
    </div>
)

}