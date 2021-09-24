import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'

export default function landingPage(){
    return(
        <div className = 'aa'>
            <h1>PI Paises</h1>
            <Link to = '/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}