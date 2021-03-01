import React from 'react';
import twitter_logo from '../resources/twitter_logo.png';
import '../Styles/components/twitterButton.scss';


const TwitterButton = (props) => {
    return (
        <img className = "Twitter__img" src = {twitter_logo} alt = "Twitter logo" onClick = { () => window.open("https://twitter.com/Mwry4444", "_blank")}/>
    );
};

export {TwitterButton as default};