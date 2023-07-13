import React from 'react';
import Secure from './Secure';
import Offer from './Offer';

const Offers = (props) => {
    return (
        <div className="offers">
            <div className="offers_container ">
                <div className="offers_offers_list">
                    <Offer />
                    <Offer />
                    <Offer />
                </div>
                <Secure />
            </div>
        </div>
    )
}

export default Offers