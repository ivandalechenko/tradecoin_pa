import React, { useEffect } from 'react';
import HaveProblems from './HaveProblems';
import ChangePassword from './ChangePassword';
import Balance from './Balance';
import Profile from './Profile';
import Sidebar from '../sidebar/Sidebar';

const ProfilePage = () => {

    useEffect(() => {
        document.title = "Profile - TradeCoinAI";
    }, []);
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="profile_page" className="page">
                    <Profile />
                    <Balance />
                    <ChangePassword />
                    <HaveProblems />
                </div>
            </div>
        </div >
    )
}

export default ProfilePage