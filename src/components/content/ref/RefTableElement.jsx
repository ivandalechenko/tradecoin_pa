import React from 'react';

const RefTableElement = (props) => {
    return (
        <div className="element">
            <div className="num">
                <div className="name">
                    #
                </div>
                2334
            </div>
            <div className="type">
                <div className="name">
                    Nickname
                </div>
                <img src="img/pa/people_green.svg" alt='people' />
                <div className="text">
                    @amazing_trade
                </div>
            </div>
            <div className="date">
                <div className="name">
                    Date
                </div>
                14 June, 2023
            </div>
            <div className="earned">
                <div className="name">
                    Earned
                </div>
                <span>
                    $349,43
                </span>
            </div>
            <div className="sum">
                <div className="name">
                    Your profit
                </div>
                <div className="text">
                    <div className="count">
                        69$
                    </div>
                    <div className="percent success">
                        3%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefTableElement