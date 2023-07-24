import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RefPage from './content/ref/RefPage';
import RefRedirector from './content/ref/RefRedirector';
import ProfilePage from './content/profile/ProfilePage';
import PaymentStatusPage from './content/paymentStatus/PaymentStatusPage';
import ManageTarifPage from './content/manageTarif/ManageTarifPage';
import ForgotPassword from './auth/ForgotPassword';
import EnterCode from './auth/EnterCode';
import NewPassword from './auth/NewPassword';
import StatPage from './content/stat/StatPage';
import Modal from './modal/Modal';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './content/HomePage';
import { useDispatch } from "react-redux";
import { checkAuthAction } from "../redux/userActions";
import AuthPage from './auth/AuthPage';

import 'react-toastify/dist/ReactToastify.css';


const Router = (props) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token') || ''
    const [isLoading, setIsLoading] = useState(token.length > 0)


    useEffect(() => {
        if (token) {
            dispatch(checkAuthAction()).then(() => {
                setIsLoading(false)
            }).catch(() => {
                localStorage.removeItem('token')
                dispatch({ type: 'LOGOUT' })
                setIsLoading(false)
            })
        }
    }, [])

    if (isLoading) return (<Modal modalType={'loader'} />)

    return (
        < BrowserRouter >
            <Routes>
                <Route element={<AuthPage />} path="/auth/:auth" />
                <Route element={<ForgotPassword />} path="/forgot_password" />
                <Route element={<EnterCode action='registration' />} path="/enter_code" />
                <Route element={<EnterCode action='restore_password' />} path="/enter_code_reset_password" />
                <Route element={<NewPassword />} path="/new_password" />
                <Route element={<RefRedirector />} path='/invite/:referal' />
                <Route element={<HomePage />} path="" />
                <Route path='/' element={<ProtectedRoute />}>
                    <Route element={<PaymentStatusPage />} path='status/:status' />
                    <Route element={<ProfilePage />} path="profile" />
                    <Route element={<RefPage />} path="referal" />
                    <Route element={<ManageTarifPage />} path="manage_tarif" />
                    <Route element={<StatPage />} path="statistic" />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router