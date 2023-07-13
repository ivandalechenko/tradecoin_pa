import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RefPage from './content/RefPage';
import ProfilePage from './content/ProfilePage';
import ManageTarifPage from './content/ManageTarifPage';
import LoginPage from './auth/LoginPage';
import RegistrationPage from './auth/RegistrationPage';
import ForgotPassword from './auth/ForgotPassword';
import EnterCode from './auth/EnterCode';
import NewPassword from './auth/NewPassword';
import StatPage from './content/StatPage';
import Modal from './modal/Modal';

const Router = (props) => {
    const [modalType, setModalType] = useState('hidden')
    return (
        <>
            <Modal modalType={modalType} setModalType={setModalType} />
            <BrowserRouter>
                <Routes>
                    <Route element={<ProfilePage setModalType={setModalType} />} path="/profile" />
                    <Route element={<RefPage setModalType={setModalType} />} path="/referal" />
                    <Route element={<ManageTarifPage setModalType={setModalType} />} path="/manage_tarif" />
                    <Route element={<StatPage setModalType={setModalType} />} path="/statistic" />
                    <Route element={<LoginPage />} path="/login" />
                    <Route element={<RegistrationPage />} path="/signup" />
                    <Route element={<ForgotPassword />} path="/forgot_password" />
                    <Route element={<EnterCode />} path="/enter_code" />
                    <Route element={<NewPassword />} path="/new_password" />
                    <Route element={<LoginPage />} path="*" />
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default Router