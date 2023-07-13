import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ logged }) => {
    console.log(logged)
    if (!logged) return <Navigate to="/login" replace />

    return <Outlet />
};

export default ProtectedRoute