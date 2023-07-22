import React, { useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import HorizontalLine from '../../UI/HorizontalLine';
import Balance from './Balance';
import ChartBlock from './ChartBlock';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">
                    {/* <Balance />
                    <ChartBlock /> */}
                    <div className='section'>
                        Coming soon :)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatPage