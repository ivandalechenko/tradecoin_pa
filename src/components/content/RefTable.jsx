import React from 'react';
import Button from '../UI/Button';
import RefTableElement from './RefTableElement';

const RefTable = (props) => {
    return (
        <div class="table">
            <div class="element">
                <div class="num">
                    #
                </div>
                <div class="type">
                    Nickname
                </div>
                <div class="date">
                    Date
                </div>
                <div class="earned">
                    Earned
                </div>
                <div class="sum">
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