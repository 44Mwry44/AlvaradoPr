import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";

const Bienvenido = (props) => {
    return (
        <Modal isOpen = {props.UsuarioValido} id = 'modal' Name = "modal">
                        
                        <h3 id = "modal__tittle">Bienvenido/a</h3>
                        
                        {props.user? <p id = "modal__body">{props.user}</p> : undefined}
                        
                        <Link to = '/home'>
                            <button className = "button" onClick = {props.handleLastUser}>Acceder</button>
                        </Link>

                    </Modal>
    );
}

export default Bienvenido;