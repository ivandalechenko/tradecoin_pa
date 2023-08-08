import React from 'react';

const TransactionElement = ({ props }) => {
    var date = new Date(Date.parse(props.date));
    var dateFormat = date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()

    var plusMinus = ''
    var percent = props.percent
    if (props.percent > 0) {
        percent = "+" + percent
        plusMinus = "plus"
    } else {
        plusMinus = "minus"
    }
    return (
        <div className="element">
            <div className="num">
                <div className="name">
                    num
                </div>
                <div className="info">
                    {props.num}
                </div>
            </div>
            <div className="type">
                <div className="name">
                    type
                </div>
                <div className="info">
                    <div className={props.type + ' short_long'}>
                        {props.type}
                    </div>
                    <div className="lev">
                        {props.margin}
                    </div>
                </div>
            </div>
            <div className="pair">
                <div className="name">pare</div>
                <div className="info">
                    <img src="/img/pa/currency/btc.png" alt="pair" />
                    <div className="text">
                        BTC/BNB
                    </div>
                </div>
            </div>
            <div className="date">
                <div className="name">Date</div>
                <div className="info">
                    {dateFormat}
                </div>
            </div>
            <div className="count">
                <div className="name">
                    Amount
                </div>
                <div className="info">
                    {Math.round(props.amount * 1000) / 1000}
                </div>
            </div>
            <div className="price">
                <div className="name">
                    Price
                </div>
                <div className="info">
                    {Math.round(props.price * 1000) / 1000}
                </div>
            </div>
            <div className="profit">
                <div className="name">
                    Profit
                </div>
                <div className="info">
                    <div className="usdt">
                        {Math.round(props.income * 1000) / 1000}$
                    </div>
                    <div className={"percent " + plusMinus}>
                        {percent}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionElement