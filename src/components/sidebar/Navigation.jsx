import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';

const Navigation = ({ setModalProps, setModalType }) => {

    const { user } = useSelector(state => state.userReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({ type: 'LOGOUT' })
        navigate("/auth/login")
    }

    return (
        <>

            <div className="navigation">
                <NavLink to="/statistic" className="navigation_element">
                    <img src="/img/pa/navigation/rounds.svg" alt="stat menu img" />
                    <div className="text">
                        Statistics
                    </div>
                </NavLink>
                <NavLink to="/profile" className="navigation_element" id="profile_opener">
                    <img src="/img/pa/navigation/profile.svg" alt="profile menu img" />
                    <div className="text">
                        Profile
                    </div>
                </NavLink>
                <NavLink to="/manage_tarif" className="navigation_element" id="manage_tarif_opener">
                    <img src="/img/pa/navigation/tarif.svg" alt="manage tarifs menu img" />
                    <div className="text">
                        Manage tarifs
                    </div>
                </NavLink>
                {/* <div id="pay_opener" className="navigation_element">
                    <img src="/img/pa/navigation/wallet.svg" alt="pay now menu img" />
                    <div className="text">
                        Pay now
                    </div>
                </div> */}
                {
                    user.tariff
                        ?
                        <div id="renew_tarif_opener" className="navigation_element" onClick={() => {
                            setModalType('select_your_wallet')
                            setModalProps({ tariff: user.tariff })
                        }}>
                            <img src="/img/pa/navigation/renew.svg" alt="renew tarif menu img" />
                            <div className="text">
                                Renew tarif
                            </div>
                        </div>
                        : <></>
                }

                {
                    user.referralEnabled
                        ?
                        <NavLink to="/referal" className="navigation_element" id="ref_opener">
                            <img src="/img/pa/navigation/ref.svg" alt="referal menu img" />
                            <div className="text">
                                Referral
                            </div>
                        </NavLink>
                        : <></>
                }

            </div>
            <button id="add_api_opener" onClick={() => setModalType('add_api')}>
                <img src="/img/pa/key.svg" alt="add api img" />
                <div className="text">
                    {user.binance.apiKey != '' || user.bybit.apiKey != '' || user.bitget.apiKey != ''
                        ? <>Change api keys</>
                        : <>Add api keys</>
                    }
                </div>
            </button >
            {/* <button className="bottom_button lang">
                <img src="/img/pa/flags/usa.png" alt="usa flag" />
                <div className="text">
                Change language
                </div>
            </button> */}
            < Link to="https://tradecoinai.com/" className="bottom_button mt200" >
                <img src="/img/pa/back_arrow.svg" alt="arrow back to main" />
                <div className="text">
                    Back to website
                </div>
            </Link >
            <button onClick={logout} className="bottom_button background_transparent">
                <img src="/img/pa/return_arrow.svg" alt="arrow logout" />
                <div className="text">
                    Log out
                </div>
            </button>
        </>
    )
}

export default Navigation