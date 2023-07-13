import React from 'react';
import Button from '../UI/Button';
import RefTableElement from './RefTableElement';

const RefTable = (props) => {
    return (
        <div className="table">
            <div className="element">
                <div className="num">
                    #
                </div>
                <div className="type">
                    Nickname
                </div>
                <div className="date">
                    Date
                </div>
                <div className="earned">
                    Earned
                </div>
                <div className="sum">
                    Your profit
                </div>
            </div>
            <RefTableElement />
            <RefTableElement />
            <RefTableElement />
            <RefTableElement />
            <Button props={{ text: 'Load more' }}></Button>
        </div>
    )
}

export default RefTable