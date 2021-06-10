import React from 'react';
import {  Redirect } from 'react-router-dom';
import API from '../RutaAPI.js';

class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            user: "",
            login: false
        };

        this.handleLogout = this.handleLogout.bind(this);
    }
    
    async componentDidMount()
    {
        this.setState({login: window.sessionStorage.getItem("isLogged")});
        this.setState({user: window.sessionStorage.getItem("user")});
    }

    handleLogout()
    {
        this.setState({login: false});
        window.sessionStorage.removeItem("isLogged");
        window.sessionStorage.removeItem("user");
        console.log(this.state.login);
    }

    handleDeleteUser = async () =>
    {
        
        const respuesta = await fetch(`${API.RUTA_API}/EliminarUsuario.php?user=${this.state.user}`);
        try 
        {
            if(await respuesta.json())
            {
                this.setState({login: false});
                window.sessionStorage.removeItem("isLogged");
                window.sessionStorage.removeItem("user");
                console.log(this.state.login);
            }
        }
        catch(e)
        {
            alert("Ocurrio un error");
            console.error(e.message);
        }
    }
    
    render() {
        if(!window.sessionStorage.getItem("isLogged"))
        {
            return (<Redirect to = {'/'} />);
        }

        return (
            <div>
                <i class="sprite sprite-bgimg">

                    <div className = "espacio">

                    </div>
                    
                    <div className = "row justify-content-center">
                        <div className = "txt-Bienvenida">
                            Bienvenid@: {this.state.user}<br/>
                        </div>
                    </div>
                    
                    <div className = "row justify-content-center">
                        
                        <div className = "col-6">
                            <button className = "btn" onClick = {this.handleDeleteUser}>Eliminar Usuario</button>
                        </div>
                        
                        <div className = "col-6">
                            <button className = "btn" onClick = {this.handleLogout}>Log out</button>
                        </div>

                    </div>
                </i>
            </div>
        )
    }
}


export default Home;