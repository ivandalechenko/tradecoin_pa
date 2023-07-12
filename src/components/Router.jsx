import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RefPage from './content/RefPage';
import ProfilePage from './content/ProfilePage';
import ManageTarifPage from './content/ManageTarifPage';
import Sidebar from './sidebar/Sidebar';
import Modal from './modal/Modal';

const Router = (props) => {
    const [modalType, setModalType] = useState('hidden')
    return (
        <BrowserRouter>
            <div className="container">
                <Modal modalType={modalType} setModalType={setModalType} />
                <Sidebar setModalType={setModalType} />
                <div id='content'>
                    <Routes>
                        <Route element={<ProfilePage />} path="/profile" />
                        <Route element={<RefPage />} path="/referal" />
                        <Route element={<ManageTarifPage />} path="/manage_tarif" />
                        <Route element={<ProfilePage />} path="*" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Router