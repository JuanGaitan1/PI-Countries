import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'
import StyleHome from "./styles/Home.module.css"

export default function landingPage(){
    return(
        <div className = 'aa'>
            <h1>PI Paises</h1>
            <Link to = '/home'>
                <button className={StyleHome.btnAdmin}>Ingresar</button>
            </Link>
        </div>
    )
}