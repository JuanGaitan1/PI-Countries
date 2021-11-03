import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { getSearch  } from "../actions";
import StyleHome from "./styles/Home.module.css"
export default function SearchBar (){
const dispatch = useDispatch()
const [name , setName] = useState("")

function hadleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
}
function hadleSubmit(e) {
    e.preventDefault()
    dispatch(getSearch(name))
    setName({
        name:""
    })
}

    return(
        <div>
            <input className={StyleHome.btnAdmin} type = 'text' value ={name.name} placeholder = 'Buscar pais' onChange= {(e)=> hadleInputChange(e)}/>
            <button className={StyleHome.btnAdmin} type = 'submit' onClick = {(e)=> hadleSubmit(e)}>Buscar</button>
        </div>
    )
}
