import React, { useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import HorizontalLine from '../UI/HorizontalLine';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">
                    <div className="section" id="ref">
                        <div className="header h5">
                            Coming soon :)
                        </div>
                        <HorizontalLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatPage