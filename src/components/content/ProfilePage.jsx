import React from 'react';
import HaveProblems from './HaveProblems';
import ChangePassword from './ChangePassword';
import Balance from './Balance';
import Profile from './Profile';
import Sidebar from '../sidebar/Sidebar';

const ProfilePage = ({ setModalType }) => {
    return (
        <div className="container">
            <Sidebar setModalType={setModalType} />
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