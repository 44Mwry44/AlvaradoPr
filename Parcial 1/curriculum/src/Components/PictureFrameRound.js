import React from 'react';
import '../Styles/components/picFrameRound.scss';

const PicFrameRound = (props) => {
    return (
        <div className = "PicFrame">
            <img className = "img" src = {props.imgURL} />
        </div>
    );
};

export {PicFrameRound as default};