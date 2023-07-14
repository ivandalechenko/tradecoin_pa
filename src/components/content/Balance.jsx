import React from 'react';
import ChangeTarifCheckStatus from '../UI/ChangeTarifCheckStatus';

const Balance = (props) => {
    return (
        <div className="section" id="balance">
            <div className="header h5">
                Your balance
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="balance">
                    <div className="round">
                        <img src="img/pa/balance_round.svg" alt='balance round' />
                        <div className="text">
                            +0%
                        </div>
                    </div>
                    <div className="info">
                        <div className="name">
                            <img src="img/pa/rounds_green.svg" alt='rounds green' />
                            <div className="text">
                                Your balance
                            </div>
                        </div>
                        <div className="count">
                            <div className="num">
                                $0
                            </div>
                            <div className="percent">
                                +0%
                            </div>
                        </div>
                        <div className="earned">
                            <div className="text">
                                Earned
                            </div>
                            <div className="num">
                                $0
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