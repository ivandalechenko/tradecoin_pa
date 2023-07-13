import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const HomePage = ({ logged }) => {
    console.log(logged)
    if (!logged) return <Navigate to="/login" replace />
    return <Navigate to="/profile" replace />
};

export default HomePage