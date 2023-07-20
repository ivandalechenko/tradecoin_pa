import React from 'react';
import Button from '../../UI/Button';
import PreviousPaymentsTableElement from './PreviousPaymentsTableElement';

const PreviousPaymentsTable = (props) => {
    return (
        <div className="table">
            <div className="element">
                <div className="num">
                    #
                </div>
                <div className="type">
                    Bид оплаты
                </div>
                <div className="date">
                    Дата
                </div>
                <div className="status">
                    Статус
                </div>
                <div className="sum">
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