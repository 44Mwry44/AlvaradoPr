import React from 'react';
import TextField from '../Componentes/TextField';
import RadioButton from '../Componentes/RadioButton';
import MD5 from 'crypto-js/md5';
import API from '../RutaAPI.js';
import { Redirect } from 'react-router';

export default class Signin extends React.Component {
    
    constructor(props)
    {
        super(props)

        this.state = {
            user: '', nombre: '',pass: '', apellidoM: '', apellidoP: '', edad: 0, genero: '', login: false,
        };

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeApellidoM = this.handleChangeApellidoM.bind(this);
        this.handleChangeApellidoP = this.handleChangeApellidoP.bind(this);
        this.handleChangeEdad = this.handleChangeEdad.bind(this);
        this.handleChangeGenero = this.handleChangeGenero.bind(this);
        this.crearUsuario = this.crearUsuario.bind(this);
    }

    crearUsuario = async () => 
    {   
        try
        {   
            const respuesta = await fetch(`${API.RUTA_API}/CrearUsuario.php?user=${this.state.user}&nombre=${this.state.nombre}&apellidoM=${this.state.apellidoM}&apellidoP=${this.state.apellidoP}&edad=${this.state.edad}&genero=${this.state.genero}&pass=${this.state.pass}`);
            if(await respuesta.json())
            {
                window.sessionStorage.setItem("isLogged", true);
                window.sessionStorage.setItem("user", this.state.user);
                this.setState({login: true})
            }
        }
        catch(e)
        {
            alert("Ocurrio un error");
            console.error(e.message);
        }
    }

    handleChangeUser(event)
    {
        this.setState({ user: event.target.value });
    }
    
    handleChangeNombre(event)
    {
        this.setState({ nombre: event.target.value });
    }

    handleChangePass(event)
    {
        this.setState({ pass: MD5(event.target.value).toString() });
    }

    handleChangeApellidoM(event)
    {
        this.setState({ apellidoM: event.target.value} );
    }

    handleChangeApellidoP(event)
    {
        this.setState({ apellidoP: event.target.value} );
    }

    handleChangeEdad(event)
    {
        this.setState({ edad: event.target.value} );
    }

    handleChangeGenero(event)
    {
        this.setState({ genero: event.target.value} );
    }
    
    render() {
        if(window.sessionStorage.getItem("isLogged"))
        {
            return (<Redirect to = {'/home'} />);
        }

        return (
            <div>

                <div className = "row justify-content-center">
                    <div className = "col-1"></div>
                    <div className = "col-1">
                        
                        <button onClick = {() => window.location.href="/"} className = "btn-salir">←</button>
                    </div>
                    <div className = "col"></div>
                    <div className = "col"></div>
                </div>

                <div className = "row justify-content-center">
                    <div className = "col"></div>
                    <div className = "col-6" id = "Bienvenida">Registrate</div>
                    <div className = "col"></div>
                </div>

                <div className = "Formulario">
                    <form> 

                        <div className = "row justify-content-center">
                            <div className = "col-8">
                                <TextField id = "NombreText"    imgURL="/img/LoginPage/Usuario.svg"  type = "text"          textoInicial = "Nombre"                 handleChange = {this.handleChangeNombre}/>
                            </div>

                        </div>

                        <div className = "row justify-content-center">
                                
                            <div className = "col-4">
                                <TextField id = "ApellidoMText" imgURL="/img/LoginPage/Usuario.svg"  type = "tex"           textoInicial = "Apellido Materno"       handleChange = {this.handleChangeApellidoM}/>
                            </div>

                            <div className = "col-4">
                                <TextField id = "ApellidoPText" imgURL="/img/LoginPage/Usuario.svg"  type = "text"          textoInicial = "Apellido Paterno"       handleChange = {this.handleChangeApellidoP}/>
                            </div>          
                                
                        </div>

                        <div className = "row justify-content-center">
                            
                            <div className = "col-2">
                                <TextField id = "EdadText"      imgURL="/img/LoginPage/Usuario.svg"  type = "text"          textoInicial = "Edad"                   handleChange = {this.handleChangeEdad}/>        
                            </div>

                            <div className = "col-3"></div>

                            <div className = "col-2">

                                <div className = "genderTitle">Seleccione su genero:</div>

                                <RadioButton  id = "radGenerioMasc" grupo = "selectGender" value = "Masc"       label = "Masculino"      handleChange = {this.handleChangeGenero}/>
                                <RadioButton  id = "radGenerioFem"  grupo = "selectGender" value = "Fem"        label = "Femenino"       handleChange = {this.handleChangeGenero}/>
                                <RadioButton  id = "radGenerioNoS"  grupo = "selectGender" value = ""           label = "No especificar" handleChange = {this.handleChangeGenero}/>

                            </div>

                            <div className = "col-1"></div>

                        </div>

                        <div className = "row justify-content-center">

                            <div className = "col-5">

                                <TextField id = "EmailText"     imgURL="/img/LoginPage/Usuario.svg"  type = "text"          textoInicial= "Usuario o E-mail"        handleChange = {this.handleChangeUser}/>
                                <TextField id = "PasswordText"  imgURL="/img/LoginPage/candado.svg"  type = "password"      textoInicial = "Contraseña"             handleChange = {this.handleChangePass}/>

                            </div>

                            <div className = "col-3">

                            </div>

                        </div>
                
                    </form>
                </div>

                <button id = "btn-Entrar" onClick = {this.crearUsuario} className = "btn-Entrar">Ingresar</button>
                
            </div>
        )
    }
}

