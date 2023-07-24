import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from './sidebar/Sidebar';
import { AnimatePresence } from 'framer-motion';

const ProtectedRoute = () => {

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (!isLoggedIn) return <Navigate to="/auth/login" replace />

    return (
        <div className='container' >
            <Sidebar />
            <AnimatePresence>
                <Outlet />
            </AnimatePresence>

        </div >

    )
};

export default ProtectedRoute