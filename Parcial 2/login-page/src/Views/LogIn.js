import  React  from "react";
import TextField from "../Componentes/TextField.js";
import $ from "jquery"

$(function() {
    
    $( "#btn-Entrar" ).on( 'click', function(){
        alert("Entraste, pero no verifique tus datos. Creo que tiene que ver con mis componente, lo revisaré y cuando lo arregle se actualizará el repositorio");
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
                                <TextField id = "EmailText" imgURL="/img/LoginPage/Usuario.svg"  type = "text"        textoInicial= "Usuario o E-mail" />
                                <TextField id = "PasswordText" imgURL="/img/LoginPage/candado.svg"  type = "password"    textoInicial = "Contraseña" />
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