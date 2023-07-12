import React from 'react';

const Balance = (props) => {
    return (
        <div class="info">
            <div class="name">
                <img src="img/pa/rounds_green.svg" alt='green rounds' />
                <div class="text">
                    Your balance
                </div>
            </div>
            <div class="count">
                <div class="num">
                    $110,3
                </div>
                <div class="percent">
                    +1,39%
                </div>
            </div>
            <div class="earned">
                <div class="text">
                    Earned
                </div>
                <div class="num">
                    $990.33
                </div>
            </div>
        </div>
    )
}

export default Balance