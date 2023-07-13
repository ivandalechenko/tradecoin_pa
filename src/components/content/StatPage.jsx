import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import HorizontalLine from '../UI/HorizontalLine';

const StatPage = ({ setLogged }) => {
    return (
        <div className="container">
            <Sidebar setLogged={setLogged} />
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