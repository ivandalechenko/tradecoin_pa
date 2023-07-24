import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Modal from '../modal/Modal';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState('')

    return (
        <div id="sidebar" className={sidebarOpen}>
            <div className="section">
                <Header setSidebarOpen={setSidebarOpen} />
                <Navigation />
            </div>
        </div>
    )
}

export default Sidebar