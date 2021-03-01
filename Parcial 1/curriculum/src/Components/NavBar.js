import React from 'react';
import '../Styles/components/NavBar.scss'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Barra = (props) => 
{
    return(
                <nav className = "NavBar">
                    
                    <Link to = "/">
                        Resumen
                    </Link>
                    
                    <Link to = "/Proyectos">
                        Proyectos
                    </Link>
                    
                    <Link to = "/about">
                        Más sobre mi
                    </Link>
                    
                    <Link to = "/Contacto">
                        Contacto
                    </Link>
                </nav>
    );
}

export {Barra as default};