import React from 'react';
import Secure from './Secure';
import Offer from './Offer';

const Offers = (props) => {
    const offers = [
        {
            title: 'Basic',
            tariff: 'basic',
            budget: '$200 - $1000',
            medium_profit: '$165.34',
            percent_profit: '+17,39%',
            medium_winrate: '67.8%',
            medium_open_time: '2 hours',
            medium_position_time: '4',
            subscribers: '138/170 users',
            price: '59$',
            price_old: '',
        },
        {
            title: 'AI Pro',
            tariff: 'ai_pro',
            budget: '$1000 - $7000',
            medium_profit: '$875.34',
            percent_profit: '+38,33%',
            medium_winrate: '73%',
            medium_open_time: '2 hours',
            medium_position_time: '7',
            subscribers: '271/320 users',
            price: '79$',
            price_old: '149$',

        },
        {
            title: 'AI Premium',
            tariff: 'ai_premium',
            budget: '$7000+',
            medium_profit: '$2378.34',
            percent_profit: '+12%',
            medium_winrate: '82%',
            medium_open_time: '6 hours',
            medium_position_time: '5',
            subscribers: '74/99 users',
            price: '30% ',
            price_old: '40%',

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