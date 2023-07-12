import React from 'react';

const PreviousPaymentsTableElement = (props) => {
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
                    Вид оплаты
                </div>
                <img src="img/pa/dollar.svg" alt='dollar' />
                <div class="text">
                    Оплата тарифа F22 RAPTOR
                </div>
            </div>
            <div class="date">
                <div class="name">
                    Дата
                </div>
                14 June, 2023
            </div>
            <div class="status">
                <div class="name">
                    Статус
                </div>
                <span class="success">
                    Успешно
                </span>
            </div>
            <div class="sum">
                <div class="name">
                    Сумма
                </div>
                <div class="text">
                    <div class="count">
                        69$
                    </div>
                    <div class="percent success">
                        +10%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviousPaymentsTableElement