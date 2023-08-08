import React, { useState } from 'react';
import Secure from '../Secure';
import Offer from './Offer';
import Modal from '../../modal/Modal';

const Offers = (props) => {
    const offers = [
        {
            title: 'Basic',
            tariff: 'basic',
            budget: '$200 - $1000',
            medium_profit: '$165.34',
            percent_profit: '+17,39%',

            average_profit: '40-57%',
            average_winrate: '47%',
            average_loss: '15-55%',
            subscribers: '138/170',
            comment: 'A profitable option for beginners',

            price: '59$',
            price_old: '',
        },
        {
            title: 'AI Pro',
            tariff: 'ai_pro',
            budget: '$1000 - $7000',
            medium_profit: '$875.34',
            percent_profit: '+38,33%',


            average_winrate: '78%',
            average_profit: '35%',
            average_loss: '15%',
            subscribers: '271/320',
            comment: 'Option for confident traders of the cryptocurrency market',

            price: '79$',
            price_old: '149$',

        },
        {
            title: 'AI Premium',
            tariff: 'ai_premium',
            budget: '$7000+',
            medium_profit: '$2378.34',
            percent_profit: '+12%',


            average_winrate: '87%',
            average_profit: '15%',
            average_loss: '5-7%',
            subscribers: '74/99',
            comment: 'The best solution for major investors',

            price: '30% ',
            price_old: '40%',
            individual: true
        }
    ]


    return (
        <div className="offers">

            <div className="offers_container ">
                <div className="offers_offers_list">
                    {offers.map((offer, index) => {
                        return <Offer key={index} offer={offer} />
                    })}

                </div>
                <Secure />
            </div>
        </div>
    )
}

export default Offers