import './styles/Home.css'
import React from "react";
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPaises,  filtradoPaises, filtradoPoblacion, filtradoAlfa, getActividad, filtradoActividad} from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import StyleHome from "./styles/Home.module.css"

export default function Home(){
    const dispatch = useDispatch()
    const paisesSeleccionados = useSelector((state)=> state.paises)
    const [currentPage, setcurrentPage] = useState(1) // lo inicio en uno para que siempre se inicie en la primera page
    const [paisesPerPage] = useState(9) //cards que se van a mostrar
    const [, setOrder] = useState('')
    const [, setAZ] = useState('')
    const ultimoPais = currentPage * paisesPerPage
    const primerPais = ultimoPais - paisesPerPage
    const paisesPageActual = paisesSeleccionados.slice(primerPais, ultimoPais)
    const nombreActividad = useSelector((state)=> state.actividad)
    const paginado = (NumeroPage)=>{setcurrentPage(NumeroPage)}
    const prueba = nombreActividad.map((e)=> e.name)
    const unicos = [... new Set(prueba)];


useEffect(()=>{
    dispatch(getPaises())
},[dispatch])

useEffect(()=>{
    dispatch(getActividad())
},[dispatch])

//reseteo Paises
function handleClick(ev){
    ev.preventDefault();
    dispatch(getPaises());
}
//los payload son los value de options
function handleFitroEstado(ev){
    dispatch(filtradoPaises(ev.target.value))
}
function handleFiltradoPoblacion(ev){
    ev.preventDefault();
    dispatch(filtradoPoblacion(ev.target.value))
    setcurrentPage(1);
    setOrder(`Ordenado ${ev.target.value}`)
}   
function handleAlfa(ev){
    ev.preventDefault();
    dispatch(filtradoAlfa(ev.target.value))
    setAZ(`Ordenado ${ev.target.value}`)
}
function handleActividades(ev) {
    dispatch(filtradoActividad(ev.target.value))
}
console.log(unicos.length );
return(
    <div className = 'container'>
        <div className = 'searchbar'>
    <SearchBar/> 
    <Link to = '/actividades'><button className={StyleHome.btnAdmin}>Crear Actividades</button></Link>
    </div>
    <div className>
        { unicos.length === 0?
        <p>Crea actividades para filtrarlas</p>
    : <select className={StyleHome.btnAdmin} onChange = {ev => handleActividades(ev)}>
    {unicos.map((ev)=>(
    <option value ={ev} > {ev} </option>
    ))}
</select>
    }
    <select  className={StyleHome.btnAdmin} onChange = {ev => handleFitroEstado(ev)} >
        <option value ='All'>Todos</option>
        <option value ='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Africa'>Africa</option>
        <option value='Oceania'>Oceania</option>
        <option value='Polar'>Polar</option>
        <option value='Americas'>Americas</option>
    </select>
    <select className={StyleHome.btnAdmin} onChange ={ev => handleFiltradoPoblacion(ev)}>
        <option value ='asendente'>Mayor Poblacion</option>
        <option value ='desendente'>Menor Poblacion</option>
    </select>
    <select className={StyleHome.btnAdmin} onChange ={ev => handleAlfa(ev)}>
    <option value ='asc'>A-Z</option>
    <option value ='des'>Z-A</option>
    </select>
    <button className={StyleHome.btnAdmin} onClick={ev=> {handleClick(ev)}}>Volver a cargar paises</button>
    </div>
    <br/>
    <div>
    <Paginado
    paisesPerPage = {paisesPerPage}
    paisesSeleccionados={paisesSeleccionados.length}
    paginado={paginado}>
    </Paginado></div> 
    {paisesPageActual?.map(el=>{
    return(
    <div key={el.id} className = 'card'>
    <Link to= {'/home/' + el.id}>
    <Card name={el.name} continente={el.continente} imagen={el.img} poblacion={el.poblacion}  />
    </Link>
    </div>
    )})}
    </div>
)}