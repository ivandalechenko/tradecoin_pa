import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <>
            <div className="navigation">
                <div className="navigation_element">
                    <img src="img/pa/navigation/rounds.svg" alt="stat menu img" />
                    <div className="text">
                        Statistics
                    </div>
                </div>
                <Link to="/profile" className="navigation_element active" id="profile_opener">
                    <img src="img/pa/navigation/profile.svg" alt="profile menu img" />
                    <div className="text">
                        Profile
                    </div>
                </Link>
                <Link to="/manage_tarif" className="navigation_element" id="manage_tarif_opener">
                    <img src="img/pa/navigation/tarif.svg" alt="manage tarifs menu img" />
                    <div className="text">
                        Manage tarifs
                    </div>
                </Link>
                <div id="pay_opener" className="navigation_element_no_act">
                    <img src="img/pa/navigation/wallet.svg" alt="pay now menu img" />
                    <div className="text">
                        Pay now
                    </div>
                </div>
                <div id="renew_tarif_opener" className="navigation_element_no_act">
                    <img src="img/pa/navigation/renew.svg" alt="renew tarif menu img" />
                    <div className="text">
                        Renew tarif
                    </div>
                </div>
                <Link to="/referal" className="navigation_element" id="ref_opener">
                    <img src="img/pa/navigation/ref.svg" alt="referal menu img" />
                    <div className="text">
                        Referral
                    </div>
                </Link>
            </div>
            <button id="add_api_opener">
                <img src="img/pa/key.svg" alt="add api img" />
                <div className="text">
                    Add api keys
                </div>
            </button>
            <button className="bottom_button lang">
                <img src="img/pa/flags/usa.png" alt="usa flag" />
                <div className="text">
                    Change language
                </div>
            </button>
            <button className="bottom_button">
                <img src="img/pa/back_arrow.svg" alt="arrow back to main" />
                <div className="text">
                    Back to website
                </div>
            </button>
            <button className="bottom_button background_transparent">
                <img src="img/pa/return_arrow.svg" alt="arrow logout" />
                <div className="text">
                    Log out
                </div>
            </button>
        </>
    )
}

export default Navigation