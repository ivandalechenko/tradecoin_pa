import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const HomePage = () => {
    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) {
        return <Navigate to="/statistic" replace />
    } else {
        return <Navigate to="/auth/login" replace />
    }
};

export default HomePage