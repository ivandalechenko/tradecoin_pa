import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ logged }) => {

    const {isLoggedIn} = useSelector(state => state.userReducer)

    if (!isLoggedIn) return <Navigate to="/login" replace />

    return <Outlet />
};

export default ProtectedRoute