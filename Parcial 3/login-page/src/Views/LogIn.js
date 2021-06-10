import  React  from "react";
import TextField from "../Componentes/TextField.js";
import API from '../RutaAPI.js';
import MD5 from 'crypto-js/md5';
import { Link, Redirect } from "react-router-dom";
import Bienvenido from '../Componentes/Bienvenido.js';

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
        this.handleLastUser = this.handleLastUser.bind(this);
    }


    
    async componentDidMount() 
    {
        this.setState({login: window.sessionStorage.getItem("isLogged")});
    }

    IniciarSesion = async () =>
    {
        
        const respuesta = await fetch(`${API.RUTA_API}/IniciarSesion.php?user=${this.state.user}&pass=${this.state.pass}`);
        try 
        {
            if(await respuesta.json())
            {
                this.setState({login: true});
                console.log(this.state.login);
                window.sessionStorage.setItem("isLogged", true);
                window.sessionStorage.setItem("user", this.state.user);
            }
        }
        catch(e)
        {
            alert("Datos errados, pruebe nuevamente");
            console.error(e.message);
        }
    }

    handlePageChange()
    {
        <Link to= "/home"/>;
        console.log(1);
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

        if(window.sessionStorage.getItem("isLogged"))
        {
            return (<Redirect to = {'/home'} />);
        }

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
                            
                                <TextField id = "EmailText"     imgURL="/img/LoginPage/Usuario.svg"  type = "text"          textoInicial= "Usuario o E-mail"     handleChange = {this.handleChangeUser}/>
                                <TextField id = "PasswordText"  imgURL="/img/LoginPage/candado.svg"  type = "password"      textoInicial = "Contraseña"          handleChange = {this.handleChangePass}/>
                                 
                            </div>
                        </div>
                    </form>
                </div>

                <button id = "btn-Entrar" onClick = {this.IniciarSesion} className = "btn-Entrar">Entrar</button>
                <div class="result"></div>
                <div class="log"></div>

                {/*Modal de "Bienvernido"*/}
                
                <div>

                    <Bienvenido UsuarioValido = {this.state.login} user = {this.state.user} handleLastUser = {this.handleLastUser} />

                </div>
                
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
                    <a href = '/signin'  className = "Crear-cuenta">Crear cuenta</a>
                </div>
            </div>
        );
    }
}

export default Login;