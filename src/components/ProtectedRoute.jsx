import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from './sidebar/Sidebar';
import { AnimatePresence, motion } from 'framer-motion';

const ProtectedRoute = () => {

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (!isLoggedIn) return <Navigate to="/auth/login" replace />

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            < div className='container' >
                <Sidebar />

                <Outlet />

            </div >
        </motion.div>

    )
};

export default ProtectedRoute