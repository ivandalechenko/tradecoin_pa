import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Sidebar = ({ setModalType }) => {
    return (
        <div id="sidebar">
            <div className="section">
                <Header />
                <Navigation setModalType={setModalType} />
            </div>
        </div>
    )
}

export default Sidebar