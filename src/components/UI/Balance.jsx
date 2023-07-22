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
                    $0
                </div>
                <div className="percent">
                    +0%
                </div>
            </div>
            <div className="earned">
                <div className="text">
                    Earned
                </div>
                <div className="num">
                    $0
                </div>
            </div>
        </div>
    )
}

export default Balance