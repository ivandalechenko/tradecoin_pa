import React from 'react';

const TransactionElement = ({ props }) => {
    var date = new Date(Date.parse(props.createdAt));
    var dateFormat = date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()
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
                        isol x{props.leverage}
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
            <div className="volume">
                <div className="name">
                    Volume
                </div>
                <div className="info">
                    {Math.round(props.value * 1000) / 1000}
                </div>
            </div>
            <div className="profit">
                <div className="name">
                    Profit
                </div>
                <div className="info">
                    <div className="usdt">
                        {Math.round(props.profit * 1000) / 1000}$
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionElement