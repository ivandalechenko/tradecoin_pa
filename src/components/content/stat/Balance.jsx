import React from 'react';
import ChangeTarifCheckStatus from '../../UI/ChangeTarifCheckStatus';

const Balance = (props) => {
    return (
        <div className="section" id="balance">
            <div className="header ">
                <div className="name h5">
                    Your balance
                </div>
                <div className="period">
                    <div className="text">
                        Select period
                    </div>
                    <div className="elements">
                        <div className="element">
                            1h
                        </div>
                        <div className="element">
                            3h
                        </div>
                        <div className="element active">
                            1d
                        </div>
                        <div className="element">
                            3d
                        </div>
                        <div className="element">
                            7d
                        </div>
                        <div className="element">
                            2w
                        </div>
                        <div className="element">
                            1m
                        </div>
                        <div className="element">
                            1y
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="balance">
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
                <ChangeTarifCheckStatus type={'stat'} />
            </div>
        </div>
    )
}

export default Balance