import React from 'react';

const ChangeTarifCheckStatus = (props) => {
    return (
        <div className="buttons_balance">
            <div className="button">
                <img src="img/pa/dual_arrows.svg" alt='arrows' />
                <div className="name">
                    Change tarif
                </div>
                <div className="desc">
                    Choose more profitable
                </div>
            </div>
            <div className="button">
                <img src="img/pa/right_up_arrow.svg" alt='arrow' />
                <div className="name">
                    Check stats
                </div>
                <div className="desc">
                    Link to profile
                </div>
            </div>
        </div>
    )
}

export default ChangeTarifCheckStatus