import React, { useEffect } from 'react';
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


const RefPage = () => {

    useEffect(() => {
        document.title = "Refferal - TradeCoinAI";
    }, []);
    const { user } = useSelector(state => state.userReducer)
    if (!user.referralEnabled) return <Navigate to="/profile" replace />
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">
                    <div className="section" id="ref">
                        <div className="header h5">
                            Your balance
                        </div>
                        <HorizontalLine />
                        <div className="content">
                            <div className="balance">
                                <img src="img/pa/peoples.png" alt='peoples' />
                                <Balance />
                            </div>
                            <InviteLink />
                        </div>

                        <HorizontalLine />
                        <div className="referals">
                            <RefTable />

                        </div>
                    </div>
                    <HaveProblems />
                </div>
            </div>
        </div>

    )
}

export default RefPage