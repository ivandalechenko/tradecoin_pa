import React from 'react';

const RefTableElement = ({ props }) => {
    var date = new Date(Date.parse(props.date));
    var dateFormat = date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()
    return (
        <div className="element">
            <div className="num">
                <div className="name">
                    #
                </div>
                {props.id}
            </div>
            <div className="type">
                <div className="name">
                    Nickname
                </div>
                <img src="img/pa/people_green.svg" alt='people' />
                <div className="text">
                    @{props.user}
                </div>
            </div>
            <div className="date">
                <div className="name">
                    Date
                </div>
                {dateFormat}
            </div>
            <div className="earned">
                <div className="name">
                    Earned
                </div>
                <span>
                    {props.fullPrice}$
                </span>
            </div>
            <div className="sum">
                <div className="name">
                    Your profit
                </div>
                <div className="text">
                    <div className="count">
                        {props.earned}$
                    </div>
                    <div className="percent success">
                        {props.percent}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefTableElement