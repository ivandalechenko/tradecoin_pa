import React, { useEffect, useState } from 'react';
import Images from './Images';
import { useParams } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

const AuthPage = (props) => {
    const { auth } = useParams()
    const [authType, setAuthType] = useState(auth)
    return (
        <div className="elements">
            {authType == 'login'
                ? <LoginPage setAuthType={setAuthType} />
                : <></>
            }
            {authType == 'signup'
                ? <RegistrationPage setAuthType={setAuthType} />
                : <></>
            }
            <Images authType={authType} />
        </div>
    )
}

export default AuthPage