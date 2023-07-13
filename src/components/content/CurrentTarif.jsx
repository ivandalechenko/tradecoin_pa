import React from 'react';
import HorizontalLine from '../UI/HorizontalLine';
import ChangeTarifCheckStatus from '../UI/ChangeTarifCheckStatus';



const CurrentTarif = (props) => {
    return (
        <div className="section" id="manage_tarifs">
            <div className="header h5">
                Manage tafis
            </div>
            <HorizontalLine />
            <div className="content">
                <div className="balance">
                    <div className="info">
                        <div className="name">
                            <img src="img/pa/rounds_green.svg" alt='rounds' />
                            <div className="text">
                                Your current tarif
                            </div>
                        </div>
                        <div className="count">
                            <div className="num">
                                F22 - RAPTOR
                            </div>
                        </div>
                        <div className="earned">
                            <div className="text">
                                Earned
                            </div>
                            <div className="num">
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

export default CurrentTarif