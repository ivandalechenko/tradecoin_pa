import React, { useEffect, useState } from 'react';
import HorizontalLine from '../../UI/HorizontalLine';
import HaveProblems from '../HaveProblems';
import Secure from '../Secure';
import Pagination from '../../UI/Pagination';
import RefTable from './RefTable';
import Balance from '../../UI/Balance';
import InviteLink from '../../UI/InviteLink';
import Sidebar from '../../sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const RefPage = () => {
    const [balance, setBalance] = useState(0)
    const [refEarned, setRefEarned] = useState(0)
    const [balanceLoading, setBalanceLoading] = useState(true)
    useEffect(() => {
        document.title = "Refferal - TradeCoinAI";
    }, []);
    const { user } = useSelector(state => state.userReducer)
    if (!user.referralEnabled) return <Navigate to="/statistic" replace />
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id='content'
        >
            <div id="ref_page">
                <div className="section" id="ref">
                    <div className="header h5">
                        Your balance
                    </div>
                    <HorizontalLine />
                    <div className="content">
                        <div className="balance">
                            <img src="img/pa/peoples.png" alt='peoples' />
                            <Balance balance={balance} refEarned={refEarned} balanceLoading={balanceLoading} />
                        </div>
                        <InviteLink />
                    </div>

                    <HorizontalLine />
                    <div className="referals">
                        <RefTable setBalance={setBalance} setRefEarned={setRefEarned} setBalanceLoading={setBalanceLoading} />
                    </div>
                </div>
                <HaveProblems />
            </div>
        </motion.div>

    )
}

export default RefPage