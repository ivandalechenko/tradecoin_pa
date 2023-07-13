import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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


const Router = (props) => {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProfilePage />} path="/profile" />
                <Route element={<RefPage />} path="/referal" />
                <Route element={<ManageTarifPage />} path="/manage_tarif" />
                <Route element={<StatPage />} path="/statistic" />
                <Route element={<LoginPage />} path="/login" />
                <Route element={<RegistrationPage />} path="/signup" />
                <Route element={<ForgotPassword />} path="/forgot_password" />
                <Route element={<EnterCode />} path="/enter_code" />
                <Route element={<NewPassword />} path="/new_password" />
                <Route element={<LoginPage />} path="*" />
            </Routes>
        </BrowserRouter >
    )
}

export default Router