import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, redirect } from 'react-router-dom';
import RefPage from './content/RefPage';
import ProfilePage from './content/ProfilePage';
import ManageTarifPage from './content/ManageTarifPage';
import LoginPage from './auth/LoginPage';
import RegistrationPage from './auth/RegistrationPage';
import ForgotPassword from './auth/ForgotPassword';
import EnterCode from './auth/EnterCode';
import NewPassword from './auth/NewPassword';
import StatPage from './content/StatPage';
import api from "../api/api";
import Modal from './modal/Modal';
import ProtectedRoute from './ProtectedRoute';


const Router = (props) => {
    const [logged, setLogged] = useState(false)

    const token = localStorage.getItem('token') || ''
    const [isLoading, setIsLoading] = useState(token.length > 0)

    useEffect(() => {
        if (token) {
            api.get('/users/checkAuth')
                .then(function (response) {
                    setLogged(true)
                    setIsLoading(false)
                })
                .catch(function (error) {
                    setLogged(false)
                    setIsLoading(false)
                });
        } else {
            setLogged(false)
        }
    }, [])

    if (isLoading) return (<Modal modalType={'loader'} />)

    return (
        < BrowserRouter >
            <Routes>
                <Route element={<LoginPage setLogged={setLogged} />} path="/login" />
                <Route element={<RegistrationPage />} path="/signup" />
                <Route element={<ForgotPassword />} path="/forgot_password" />
                <Route element={<EnterCode setLogged={setLogged} />} path="/enter_code" />
                <Route element={<NewPassword />} path="/new_password" />
                {/* <Route element={<LoginPage />} path="/*" /> */}
                <Route path='/' element={<ProtectedRoute logged={logged} />}>
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