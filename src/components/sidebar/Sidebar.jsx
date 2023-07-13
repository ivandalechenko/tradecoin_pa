import React, { useEffect, useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Modal from '../modal/Modal';
import api from "../../api/api";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const [modalType, setModalType] = useState('hidden')

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token.length < 10) {
            navigate("/login")
        } else {
            api.get('/users/checkAuth')
                .catch(function (error) {
                    navigate("/login")
                });
        }

    }, [])

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