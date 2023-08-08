import React, { useEffect, useState } from 'react';
import Images from './Images';
import { Navigate, useParams } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import { useSelector } from 'react-redux';

const AuthPage = (props) => {
    const { auth } = useParams()
    const [authType, setAuthType] = useState(auth)

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) {
        return <Navigate to="/statistic" replace />
    }
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