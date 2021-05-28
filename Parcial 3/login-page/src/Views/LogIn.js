import  React, {useState, useEffect}  from "react";
import TextField from "../Componentes/TextField.js";
import API from '../RutaAPI.js'
import Bienvenido from '../Componentes/Bienvenido.js';
import MD5 from 'crypto-js/md5';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            login: false,
        };
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
    }


    
    async componentDidMount() 
    {
        /*const respuesta = await fetch(`${API.RUTA_API}/Prueba.php`);
        const videojuegos = await respuesta.json();
        console.log(videojuegos);*/
    }

    IniciarSesion = async () =>
    {
        
        const respuesta = await fetch(`${API.RUTA_API}/Prueba.php?user=${this.state.user}&pass=${this.state.pass}`);
        //await console.log(respuesta.json());
        try
        {
            if(await respuesta.json())
            {
                console.log(true);
                this.setState({login: true});
                alert("Bienvenido/a: " + this.state.user );
            }
        }
        catch(e)
        {
            alert("Datos errados, pruebe nuevamente");
            console.error(e.message);
        }
    }

    handleChangeUser(event) 
    {
        this.setState({user: event.target.value});
        //linea debug
        //console.log(this.state.user)
    }

    handleChangePass(event) 
    {
        this.setState({pass: MD5(event.target.value).toString()});
        //Linea debug
        //console.log(this.state.pass)
    }

    handleLastUser(event)
    {
        this.setState( () => ({
            user: '',
            pass: '',
            login: false
        }));
    }

    render() {
        return (
            <div>
                { /*Header*/ }
                <div className = "header">                
                    <div className = "col">
                        <a className = "link">Descargar app</a>
                    </div>

                    <div className = "col-md-4" />
                    
                    <div className = "col">
                        <a className = "link" >Ayuda</a>
                    </div>
                </div>

                {/* Cuadros de texto */}
                <div className = "Formulario">
                    <form>  
                        <div className = "row justify-content-center">
                            <div className = "col-lg-5">
                            
                            <div className="campo">
                                <img className = "imagen" src="/img/LoginPage/Usuario.svg" />
                                <input id = "User" className = "texto" type = "text" placeholder = "Usuario o E-mail" onChange = {this.handleChangeUser} />
                            </div>

                            <div className="campo">
                                <img className = "imagen" src="/img/LoginPage/candado.svg" />
                                <input id = "Pass" className = "texto" type = "password" placeholder = "Contraseña" onChange = {this.handleChangePass} />
                            </div>
                                { /* <TextField id = "EmailText" imgURL="/img/LoginPage/Usuario.svg"  type = "text"        textoInicial= "Usuario o E-mail" /> */ }
                                { /*  <TextField id = "PasswordText" imgURL="/img/LoginPage/candado.svg"  type = "password"    textoInicial = "Contraseña" /> */ }
                            </div>
                        </div>
                    </form>
                </div>

                <button id = "btn-Entrar" onClick = {this.IniciarSesion} className = "btn-Entrar">Entrar</button>
                <div class="result"></div>
                <div class="log"></div>

                {/*Modal de "Bienvernido"*/}
                {/*<Bienvenido usuarioValido = {this.state.login} handleLastUser = {this.handleLastUser} user = {this.state.user}/>*/}

                
                {/* Link - Password Forgotten */}
                <div className = "link">
                    <a className = "NoPass">¿Olvidaste tu contraseña?</a>
                </div>


                {/* Linea decorativa */}
                <div className = "row justify-content-center">
                    <div className = "col-4">
                        <hr className = "linea"></hr>
                    </div>
                </div>

                {/* Link inferior - Sign Up */}
                <div className = "row justify-content-center">
                    <text className = "No-tienes-cuenta">¿No tienes cuenta?</text>
                    <a className = "Crear-cuenta">Crear cuenta</a>
                </div>
            </div>
        );
    }
}

export default Login;