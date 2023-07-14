import React, { useEffect, useState } from 'react';
import Input from '../UI/Input';
import { updateTokensAction } from "../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";

const ModalAddApi = ({ setModalType }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userReducer)
    const [activeExchange, setActiveExchange] = useState('bybit')
    const [activeExchangeStyle, setActiveExchangeStyle] = useState(
        {
            bybit: 'selected',
            bitget: '',
            binance: '',
        }
    )

    useEffect(() => {
        if (activeExchange == 'binance') {
            setApi(user.binance.apiKey)
            setSecret(user.binance.secret)
            setActiveExchangeStyle({
                bybit: '',
                bitget: '',
                binance: 'selected',
            })
        }
        if (activeExchange == 'bybit') {
            setApi(user.bybit.apiKey)
            setSecret(user.bybit.secret)
            setActiveExchangeStyle({
                bybit: 'selected',
                bitget: '',
                binance: '',
            })
        }
        if (activeExchange == 'bitget') {
            setApi(user.bitget.apiKey)
            setSecret(user.bitget.secret)
            setActiveExchangeStyle({
                bybit: '',
                bitget: 'selected',
                binance: '',
            })
        }
    }, [activeExchange]);

    const handleUpdate = (e) => {
        e.preventDefault()
        if (activeExchange == 'binance') {
            const binance = {
                apiKey: api,
                secret: secret
            }
            dispatch(updateTokensAction({ binance })).then(() => {
                setModalType("hidden")
            }).catch((err) => {
                console.log(err)
            })
        }
        if (activeExchange == 'bybit') {
            const bybit = {
                apiKey: api,
                secret: secret
            }
            dispatch(updateTokensAction({ bybit })).then(() => {
                setModalType("hidden")
            }).catch((err) => {
                console.log(err)
            })
        }
        if (activeExchange == 'bitget') {
            const bitget = {
                apiKey: api,
                secret: secret
            }
            dispatch(updateTokensAction({ bitget })).then(() => {
                setModalType("hidden")
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    const [api, setApi] = useState('')
    const [secret, setSecret] = useState('')

    useEffect(() => {
        setApi(user.bybit.apiKey)
        setSecret(user.bybit.secret)
    }, []);





    return (
        <div id="inner_add_api" className="modal_inner">
            <div className="header">
                <div className="name">
                    <img src="img/pa/modal/key.svg" alt="key" />
                    <div className="text">
                        Add crypto-key API
                    </div>
                </div>
                <img className="modal_closer" src="img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
            </div>
            <div className="content">
                <div className="platforms">
                    <div className={"platform " + activeExchangeStyle.binance} onClick={() => setActiveExchange('binance')}>
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/binance.svg" alt="binance" />
                        </div>
                    </div>
                    <div className={"platform " + activeExchangeStyle.bybit} onClick={() => setActiveExchange('bybit')}>
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/bybit.svg" alt="bybit" />
                        </div>
                    </div>
                    <div className={"platform " + activeExchangeStyle.bitget} onClick={() => setActiveExchange('bitget')}>
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/bitget.png" alt="bitget" />
                        </div>
                    </div>
                </div>
                <Input props={{
                    imageName: 'key.svg',
                    label: 'API key',
                    placeholder: 'Enter API key',
                    onChange: (e) => setApi(e.target.value),
                    value: api,
                }} />
                <Input props={{
                    imageName: 'lock.svg',
                    label: 'Secret key',
                    placeholder: 'Enter Secret key',
                    onChange: (e) => setSecret(e.target.value),
                    value: secret,
                }} />


                <div className="button_and_check">
                    <button className="send_info_button input_block_first" onClick={handleUpdate}>
                        Add API key
                    </button >
                    <div className="checkbox">
                        <div className="checkbox_wrapper checked">
                            <img src="img/pa/check.svg" alt="check" />
                        </div>
                        <div className="text">
                            I understand how to use API keys
                        </div>
                    </div>
                </div>
                <div className="steps_and_notice">
                    <div className="steps_and_bg">
                        <div className="bg">
                        </div>
                        <div className="steps">
                            <div className="step">
                                <button className="num">
                                    1
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 1
                                    </div>
                                    <div className="info">
                                        Перейдите на сайт биржи
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <button className="num">
                                    2
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 2
                                    </div>
                                    <div className="info">
                                        Create key “only for reading”
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <button className="num">
                                    3
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 3
                                    </div>
                                    <div className="info">
                                        Enter the key
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notice">
                        <div className="wrapper">

                            <img src="img/pa/notice.svg" alt="notice" />
                            <div className="text">
                                <div className="head">
                                    Important!
                                </div>
                                <div className="info">
                                    Always use API keys “only for reading. Dairy book available only for features
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddApi