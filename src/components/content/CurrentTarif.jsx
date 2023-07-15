import React from 'react';
import HorizontalLine from '../UI/HorizontalLine';
import ChangeTarifCheckStatus from '../UI/ChangeTarifCheckStatus';
import { useSelector } from 'react-redux';



const CurrentTarif = (props) => {
    String.prototype.firstLetterToUppercase = function () {
        return this[0].toUpperCase() + this.slice(1);
    }

    const { user } = useSelector(state => state.userReducer)

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
                                {
                                    user.tariff == ""
                                        ? <>Isn't chosen</>
                                        : <>{user.tariff.firstLetterToUppercase()}</>
                                }
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
                <ChangeTarifCheckStatus type={'manage_tarifs'} />
            </div>
        </div>
    )
}

export default CurrentTarif