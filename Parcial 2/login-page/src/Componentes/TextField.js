import React from 'react';

const Textfield = (props) => (
    <div className="campo">
        <img className = "imagen" src={props.imgURL ? props.imgURL : undefined } />
        <input id = "Texto" className = "texto" type = {props.type} placeholder = {props.textoInicial}/>
    </div>
);

export default Textfield;