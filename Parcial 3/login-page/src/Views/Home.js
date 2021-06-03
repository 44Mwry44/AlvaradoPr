import React from 'react';
import { Link } from 'react-router-dom';
import API from '../RutaAPI.js';

class Home extends React.Component {
    
    async componentDidMount()
    {
        const respuesta = await fetch(`${API.RUTA_API}/VerficarSesion.php`);
        if(await respuesta)
        {
            console.log(respuesta);
            alert("Bienvenido/a: ");
        }
    }
    
    render() {
        return (
            <div>
                Bienvenido: Usuario<br/>
                <Link to = "/">
                    <button>Log out</button>
                </Link>
            </div>
        )
    }
}


export default Home;