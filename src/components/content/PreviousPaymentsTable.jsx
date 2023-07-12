import React from 'react';
import Button from '../UI/Button';
import PreviousPaymentsTableElement from './PreviousPaymentsTableElement';

const PreviousPaymentsTable = (props) => {
    return (
        <div class="table">
            <div class="element">
                <div class="num">
                    #
                </div>
                <div class="type">
                    Bид оплаты
                </div>
                <div class="date">
                    Дата
                </div>
                <div class="status">
                    Статус
                </div>
                <div class="sum">
                    Сумма
                </div>
            </div>
            <PreviousPaymentsTableElement />
            <PreviousPaymentsTableElement />
            <PreviousPaymentsTableElement />
            <PreviousPaymentsTableElement />
            <Button props={{ text: 'Load more' }} />
        </div>
    )
}

export default PreviousPaymentsTable