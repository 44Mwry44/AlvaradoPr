import React from 'react';
import fb_logo from '../resources/fb_logo.png';
import '../Styles/components/fbButton.scss';


const FbButton = (props) => {
    return (
        <img className = "Fb__img" src = {fb_logo} alt = "Fb logo" onClick = { () => window.open("https://www.facebook.com/mwry.alvarado", "_blank")}/>
    );
};

export {FbButton as default};