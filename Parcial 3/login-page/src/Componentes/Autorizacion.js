import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile({Valido})
{
    if(!Valido)
    {
        return <Redirect to = '/login' />;
    }
    return <Redirect to = '/home' />;
}

export default Profile;