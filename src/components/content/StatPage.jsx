import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import HorizontalLine from '../UI/HorizontalLine';

const StatPage = (props) => {
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="ref_page">
                    <div class="section" id="ref">
                        <div class="header h5">
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