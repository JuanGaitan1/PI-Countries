import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {postActividad, getActividad} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import './styles/Actividades.css'
import StyleHome from "./styles/Home.module.css"
function validate(input) {
    if(!input.name){
        alert("Se requiere un nombre") 
    }else if(!input.dificultad){
        alert ("Se requiere poner una dificultad")
    }else if(!input.duracion){
       alert ("Poner hora o dias (ej: 9 horas)")
    }else if(!input.temporada){
       alert ("Se requiere una temporada")
    }else if(input.countryid < 1){
       alert ("Selecciona los paises en donde creaste tu actividad")
    }
}


export default function CreacionActividades() {
    const dispatch = useDispatch()
    const paisesSeleccionados = useSelector((state)=> state.allPaises)
    const [, setError] = useState({})
    const [input, setInput]=useState({
        name:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        countryid:[]
    })

useEffect(()=>{
    dispatch(getActividad())
},[dispatch])

function hadleDelete(ev) {
    setInput({
        ...input,
        countryid: input.countryid.filter(el => el !== ev)
    })
}

function hadleChange(ev){
    setInput    ({
        ...input,
        [ev.target.name] : ev.target.value
    })
}
function hadleSelect(ev) {
    setInput({
        ...input,
        countryid: [...input.countryid, ev.target.value]
    })
}
function hadleTemporada(ev) {
    setInput({
        ...input,
        temporada: ev.target.value
    })
}
function hadleDificultad(ev) {
    setInput({
        ...input,
        dificultad: ev.target.value
    })
}
function hadleSubmit(ev) {
    ev.preventDefault()
    setError (validate({
        ...input,
        [ev.target.value]: ev.target.value
    }))
    dispatch(postActividad(input))
    setInput({
        name:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        countryid:[]
    })
}
    return(
        <div>
            <h1>Crea tu actividad</h1>
            <Link to = '/home'><button className={StyleHome.btnAdmin}>Volver</button></Link> 
            <div className={StyleHome.body}>
            <form className = 'prueba'>
                <div>
                    <label>Actividad:</label>
                    <input className={StyleHome.btnAdmin} type = 'text' value = {input.name} name ='name'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>
                <div>
                    <label>Dificultad:</label>
                    <select className={StyleHome.btnAdmin} onChange = {(ev)=> hadleDificultad(ev)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    </select>
                </div>
                <div>
                    <label>Duracion:</label>
                    <input className={StyleHome.btnAdmin} type = 'string' value = {input.duracion} name ='duracion'
                    onChange={(ev) => hadleChange(ev)}></input>
                </div>
                <div>
                    <label>Temporada:</label>
                    <select className={StyleHome.btnAdmin} onChange={(ev) => hadleTemporada(ev)}>
                    <option value ='verano'>Verano</option>
                    <option value ='invierno'>Invierno</option>
                    <option value='otoño'>Otoño</option>
                    <option value='primavera'>Primavera</option>
                    <option value='todo'>Todo el año</option>
                    </select>
                </div>
                <label>Paises: <select className={StyleHome.btnAdmin} onChange = {(ev) => hadleSelect(ev)}>
                    {paisesSeleccionados.map((ev)=>(
                        <option value ={ev.id} >{ev.name} </option>
                    ))}
                </select></label>
            <button className={StyleHome.btnAdmin} type='submit' onClick={(ev) => hadleSubmit(ev)}>Agregar</button>
            </form>
            {input.countryid.map(el=>
                <div className={StyleHome.Pais}>
                    <h6>{el}</h6>
                    <button className={StyleHome.btnAdmin} className ='boton' onClick={()=> hadleDelete(el)}>x</button>
                </div>)}
        </div>
    </div>
    )
}