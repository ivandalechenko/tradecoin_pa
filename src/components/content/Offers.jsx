import React from 'react';
import Secure from './Secure';
import Offer from './Offer';

const Offers = (props) => {
    return (
        <div class="offers">
            <div class="offers_container ">
                <div class="offers_offers_list">
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