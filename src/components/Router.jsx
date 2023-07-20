import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RefPage from './content/ref/RefPage';
import ProfilePage from './content/profile/ProfilePage';
import ManageTarifPage from './content/manageTarif/ManageTarifPage';
import LoginPage from './auth/LoginPage';
import RegistrationPage from './auth/RegistrationPage';
import ForgotPassword from './auth/ForgotPassword';
import EnterCode from './auth/EnterCode';
import NewPassword from './auth/NewPassword';
import StatPage from './content/stat/StatPage';
import Modal from './modal/Modal';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './content/HomePage';
import { useDispatch, useSelector } from "react-redux";
import { checkAuthAction } from "../redux/userActions";
import { CSSTransition } from 'react-transition-group'
import ForgotPasswordEnterCode from './auth/ForgotPasswordEnterCode';

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
            {/* <CSSTransition transitionName="example"> */}
            <Routes>
                <Route element={<HomePage />} path="" />
                <Route element={<LoginPage />} path="/login" />
                <Route element={<RegistrationPage />} path="/signup" />
                <Route element={<ForgotPassword />} path="/forgot_password" />
                <Route element={<EnterCode />} path="/enter_code" />
                <Route element={<ForgotPasswordEnterCode />} path="/enter_code_forgot_password" />
                <Route element={<NewPassword />} path="/new_password" />
                <Route path='/' element={<ProtectedRoute />}>
                    <Route element={<ProfilePage />} path="profile" />
                    <Route element={<RefPage />} path="referal" />
                    <Route element={<ManageTarifPage />} path="manage_tarif" />
                    <Route element={<StatPage />} path="statistic" />
                </Route>
            </Routes>
            {/* </CSSTransition> */}
        </BrowserRouter >
    )
}

export default Router