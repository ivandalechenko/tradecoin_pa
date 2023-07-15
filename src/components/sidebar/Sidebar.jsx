import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Modal from '../modal/Modal';

const Sidebar = () => {
    const [modalType, setModalType] = useState('hidden')
    const [sidebarOpen, setSidebarOpen] = useState('')

    return (
        <div id="sidebar" className={sidebarOpen}>
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="section">
                <Header setSidebarOpen={setSidebarOpen} />
                <Navigation setModalType={setModalType} />
            </div>
        </div>
    )
}

export default Sidebar