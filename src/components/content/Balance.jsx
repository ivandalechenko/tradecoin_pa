import React from 'react';
import ChangeTarifCheckStatus from '../UI/ChangeTarifCheckStatus';

const Balance = (props) => {
    return (
        <div class="section" id="balance">
            <div class="header h5">
                Your balance
            </div>
            <div class="hr">
            </div>
            <div class="content">
                <div class="balance">
                    <div class="round">
                        <img src="img/pa/balance_round.svg" alt='balance round' />
                        <div class="text">
                            +38,39%
                        </div>
                    </div>
                    <div class="info">
                        <div class="name">
                            <img src="img/pa/rounds_green.svg" alt='rounds green' />
                            <div class="text">
                                Your balance
                            </div>
                        </div>
                        <div class="count">
                            <div class="num">
                                $12 940
                            </div>
                            <div class="percent">
                                +38,39%
                            </div>
                        </div>
                        <div class="earned">
                            <div class="text">
                                Earned
                            </div>
                            <div class="num">
                                $990.33
                            </div>
                        </div>
                    </div>
                </div>
                <ChangeTarifCheckStatus />
            </div>
        </div>
    )
}

export default Balance