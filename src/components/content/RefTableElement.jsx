import React from 'react';

const RefTableElement = (props) => {
    return (
        <div class="element">
            <div class="num">
                <div class="name">
                    #
                </div>
                2334
            </div>
            <div class="type">
                <div class="name">
                    Nickname
                </div>
                <img src="img/pa/people_green.svg" alt='people' />
                <div class="text">
                    @amazing_trade
                </div>
            </div>
            <div class="date">
                <div class="name">
                    Date
                </div>
                14 June, 2023
            </div>
            <div class="earned">
                <div class="name">
                    Earned
                </div>
                <span>
                    $349,43
                </span>
            </div>
            <div class="sum">
                <div class="name">
                    Your profit
                </div>
                <div class="text">
                    <div class="count">
                        69$
                    </div>
                    <div class="percent success">
                        3%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefTableElement