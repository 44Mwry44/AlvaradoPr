import React from 'react';

const RadioButton = (props) => (
    <div className = "rad">
        <input type = "radio" id = {props.id} name = {props.grupo} value = {props.value} checked = {props.checked} onChange = {props.handleChange}/>
        <label for = {props.id}>{props.label}</label>
        <span className = "checkmark"></span>
    </div>
);

export default RadioButton;