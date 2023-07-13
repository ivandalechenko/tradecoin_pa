import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteL = ({ logged }) => {
    console.log(logged)
    if (!logged) return <Navigate to="/profile" replace />

    return <Outlet />
};

export default ProtectedRouteL