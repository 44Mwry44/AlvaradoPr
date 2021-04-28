import  React  from "react";
import TextField from "../Componentes/TextField.js";
import $ from "jquery"

$(function() {
    
    $( "#btn-Entrar" ).on( 'click', function(){
        if($("#User").val() != "" && $("#User").val() != "")
        {
            alert("Entraste");
        }
        
    } );
  
});

function main() {

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
                                <input id = "User" className = "texto" type = "text" placeholder = "Usuario o E-mail"/>
                            </div>

                            <div className="campo">
                                <img className = "imagen" src="/img/LoginPage/candado.svg" />
                                <input id = "Pass" className = "texto" type = "password" placeholder = "Contraseña"/>
                            </div>
                                { /* <TextField id = "EmailText" imgURL="/img/LoginPage/Usuario.svg"  type = "text"        textoInicial= "Usuario o E-mail" /> */ }
                                { /*  <TextField id = "PasswordText" imgURL="/img/LoginPage/candado.svg"  type = "password"    textoInicial = "Contraseña" /> */ }
                            </div>
                        </div>
                    </form>
                </div>

                <button id = "btn-Entrar" className = "btn-Entrar">Entrar</button>

                
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

export default main;