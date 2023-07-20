import React, { useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import HorizontalLine from '../../UI/HorizontalLine';
import Balance from './Balance';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">
                    {/* <div className="section" id="ref">
                        <div className="header h5">
                            Coming soon :)
                        </div>
                        <HorizontalLine />
                    </div> */}
                    <Balance />

                </div>
            </div>
        </div>
    )
}

export default StatPage