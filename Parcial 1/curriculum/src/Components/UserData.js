import React from 'react';
import PictureFrameRound from './PictureFrameRound.js';
import FbButton from './FbButton.js';
import TwitterButton from './TwitterButton.js';
import InstagramButton from './InstagramButton.js';
import profileURL from '../resources/Prof.png';
import '../Styles/components/UserData.scss';
import stats from '../resources/Cat.png'; 

const DataBox = (props) =>
{
    return(
        <div className = "PresentationBox">
            <div className = "Profile_Picture">
                <PictureFrameRound imgURL = {profileURL}/>
            </div>

            <div className = "Datos">
                {/* Nombre */}
                <h2>Amelia Maxine Alvarado</h2>
                {/* Edad */}
                <h2>20 años</h2>
                {/* Nacionalidad */}
                <h2>Desarrolladora de Software</h2>
                {/* Contacto */}
                <h2>Mwry4Wrok@hotmail.com  +52 867-141-0908</h2>
            </div>

            <div className = "RuedaDeHabilidades">
            </div>

            <div className = "Redes">
                <FbButton />
                <TwitterButton />
                <InstagramButton />
            </div>

        </div>
    );
}

export {DataBox as default};