import React from 'react';

const Balance = (props) => {
    return (
        <div className="info">
            <div className="name">
                <img src="img/pa/rounds_green.svg" alt='green rounds' />
                <div className="text">
                    Your balance
                </div>
            </div>
            <div className="count">
                <div className="num">
                    $110,3
                </div>
                <div className="percent">
                    +1,39%
                </div>
            </div>
            <div className="earned">
                <div className="text">
                    Earned
                </div>
                <div className="num">
                    $990.33
                </div>
            </div>
        </div>
    )
}

export default Balance