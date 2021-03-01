import React from 'react';

const TechList = (props) =>
{
    return(
        <div className = "PresentationBox">
            <img src = {props.imgURL}/>
        </div>
    );
}

export {TechList as default};