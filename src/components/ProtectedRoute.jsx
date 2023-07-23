import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from './sidebar/Sidebar';

const ProtectedRoute = ({ logged }) => {

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (!isLoggedIn) return <Navigate to="/auth/login" replace />

    return (
        <div className='container'>
            <Sidebar />
            <Outlet />
        </div>
    )
};

export default ProtectedRoute