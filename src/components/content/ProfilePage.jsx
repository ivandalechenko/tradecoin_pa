import React from 'react';
import HaveProblems from './HaveProblems';
import ChangePassword from './ChangePassword';
import Balance from './Balance';
import Profile from './Profile';

const ProfilePage = (props) => {
    return (

        <div id="profile_page" class="page">
            <Profile />
            <Balance />
            <ChangePassword />
            <HaveProblems />
        </div>
    )
}

export default ProfilePage