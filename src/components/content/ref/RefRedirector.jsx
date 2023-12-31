import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const RefRedirector = (props) => {
    const { referal } = useParams()
    localStorage.setItem('refCode', referal)
    return <Navigate to="/auth/signup" replace />

}

export default RefRedirector