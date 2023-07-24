import React, { useState } from 'react';
import ChangeTarifCheckStatus from '../../UI/ChangeTarifCheckStatus';

const Balance = (props) => {
    const [timePeriod, setTimePeriod] = useState('1d')
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
                        <div className={timePeriod == '1h' && "active"} onClick={() => setTimePeriod('1h')}>
                            1h
                        </div>
                        <div className={timePeriod == '3h' && "active"} onClick={() => setTimePeriod('3h')}>
                            3h
                        </div>
                        <div className={timePeriod == '1d' && "active"} onClick={() => setTimePeriod('1d')}>
                            1d
                        </div>
                        <div className={timePeriod == '3d' && "active"} onClick={() => setTimePeriod('3d')}>
                            3d
                        </div>
                        <div className={timePeriod == '7d' && "active"} onClick={() => setTimePeriod('7d')}>
                            7d
                        </div>
                        <div className={timePeriod == '2w' && "active"} onClick={() => setTimePeriod('2w')}>
                            2w
                        </div>
                        <div className={timePeriod == '1m' && "active"} onClick={() => setTimePeriod('1m')}>
                            1m
                        </div>
                        <div className={timePeriod == '1y' && "active"} onClick={() => setTimePeriod('1y')}>
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