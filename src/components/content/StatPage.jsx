import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import HorizontalLine from '../UI/HorizontalLine';

const StatPage = ({ setModalType }) => {
    return (
        <div className="container">
            <Sidebar setModalType={setModalType} />
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