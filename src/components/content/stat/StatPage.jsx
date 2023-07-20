import React, { useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import HorizontalLine from '../../UI/HorizontalLine';
import Balance from './Balance';
import Chart from './Chart';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">

                    <Balance />
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default StatPage