import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="section">
                <Header />
                <Navigation />
            </div>
        </div>
    )
}

export default Sidebar