import React from 'react';

const PreviousPaymentsTableElement = (props) => {
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
                    Вид оплаты
                </div>
                <img src="img/pa/dollar.svg" alt='dollar' />
                <div className="text">
                    Оплата тарифа F22 RAPTOR
                </div>
            </div>
            <div className="date">
                <div className="name">
                    Дата
                </div>
                14 June, 2023
            </div>
            <div className="status">
                <div className="name">
                    Статус
                </div>
                <span className="success">
                    Успешно
                </span>
            </div>
            <div className="sum">
                <div className="name">
                    Сумма
                </div>
                <div className="text">
                    <div className="count">
                        69$
                    </div>
                    <div className="percent success">
                        +10%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviousPaymentsTableElement