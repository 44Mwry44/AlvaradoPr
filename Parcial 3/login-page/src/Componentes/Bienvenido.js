import React from 'react';
import Modal from 'react-modal';

const Bienvenido = (props) => {
    return (
        <Modal isOpen = {!!props.usuarioValido}  contenteLabel = "Bienvenido/a:" closeTimeoutMS = {200} className = "modal">
            <h3 className = "modal__title">Bienvenido/a</h3>
            {props.user? <p className = "modal__body">{props.user}</p> : undefined}
        </Modal>
    );
}

export default Bienvenido;