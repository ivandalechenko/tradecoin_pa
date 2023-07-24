import React, { useEffect } from 'react';
import HaveProblems from '../HaveProblems';
import ChangePassword from './ChangePassword';
import Balance from './Balance';
import Profile from './Profile';
import { motion } from 'framer-motion';

const ProfilePage = () => {
    useEffect(() => {
        document.title = "Profile - TradeCoinAI";
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id='content'
        >
            <div id="profile_page" className="page">
                <Profile />
                <Balance />
                <ChangePassword />
                <HaveProblems />
            </div>
        </motion.div>

    )
}

export default ProfilePage