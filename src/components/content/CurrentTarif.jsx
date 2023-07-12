import React from 'react';
import HorizontalLine from '../UI/HorizontalLine';
import ChangeTarifCheckStatus from '../UI/ChangeTarifCheckStatus';



const CurrentTarif = (props) => {
    return (
        <div class="section" id="manage_tarifs">
            <div class="header h5">
                Manage tafis
            </div>
            <HorizontalLine />
            <div class="content">
                <div class="balance">
                    <div class="info">
                        <div class="name">
                            <img src="img/pa/rounds_green.svg" alt='rounds' />
                            <div class="text">
                                Your current tarif
                            </div>
                        </div>
                        <div class="count">
                            <div class="num">
                                F22 - RAPTOR
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

export default CurrentTarif