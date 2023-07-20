import React from 'react';
import { Link } from 'react-router-dom';

const ChangeTarifCheckStatus = ({ type }) => {
    return (
        <div className="buttons_balance">
            {
                type != 'profile'
                    ? <>
                        <Link to="/profile" className="button">
                            <img src="img/pa/dual_arrows.svg" alt='arrows' />
                            <div className="name">
                                My profile
                            </div>
                            <div className="desc">
                                Link to profile
                            </div>
                        </Link>
                    </>
                    : <></>
            }{
                type != 'manage_tarifs'
                    ? <>
                        <Link to="/manage_tarif" className="button">
                            <img src="img/pa/dual_arrows.svg" alt='arrows' />
                            <div className="name">
                                Change tarif
                            </div>
                            <div className="desc">
                                Choose more profitable
                            </div>
                        </Link>
                    </>
                    : <></>
            }{
                type != 'stat'
                    ? <>
                        <Link to="/statistic" className="button">
                            <img src="img/pa/right_up_arrow.svg" alt='arrow' />
                            <div className="name">
                                Check stats
                            </div>
                            <div className="desc">
                                Link to profile
                            </div>
                        </Link>
                    </>
                    : <></>
            }
        </div>
    )
}

export default ChangeTarifCheckStatus