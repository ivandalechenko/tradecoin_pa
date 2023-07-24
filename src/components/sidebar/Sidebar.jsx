import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Modal from '../modal/Modal';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState('')
    const [modalProps, setModalProps] = useState({})
    const [modalType, setModalType] = useState('hidden')

    return (
        <>
            <div id="sidebar" className={sidebarOpen}>
                <div className="section">
                    <Header setSidebarOpen={setSidebarOpen} />
                    <Navigation setModalProps={setModalProps} setModalType={setModalType} />
                </div>
            </div>
            <Modal modalType={modalType} setModalType={setModalType} props={modalProps} />
        </>
    )
}

export default Sidebar