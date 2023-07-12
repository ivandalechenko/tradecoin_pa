import React from 'react';

const ChangeTarifCheckStatus = (props) => {
    return (
        <div class="buttons_balance">
            <div class="button">
                <img src="img/pa/dual_arrows.svg" alt='arrows' />
                <div class="name">
                    Change tarif
                </div>
                <div class="desc">
                    Choose more profitable
                </div>
            </div>
            <div class="button">
                <img src="img/pa/right_up_arrow.svg" alt='arrow' />
                <div class="name">
                    Check stats
                </div>
                <div class="desc">
                    Link to profile
                </div>
            </div>
        </div>
    )
}

export default ChangeTarifCheckStatus