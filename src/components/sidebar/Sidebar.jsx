import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
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