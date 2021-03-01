import React from 'react';
import instagram_logo from '../resources/instagram_logo.png';
import '../Styles/components/instagramButton.scss';


const InstagramButton = (props) => {
    return (
        <img className = "Instagram__img" src = {instagram_logo} alt = "instagram logo" onClick = { () => window.open("https://www.instagram.com/closet_random_trap/", "_blank")}/>
    );
};

export {InstagramButton as default};