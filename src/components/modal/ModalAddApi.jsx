import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import { updateTokensAction } from "../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '../UI/Checkbox';

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
    const [checked, setChecked] = useState(false)
    const [canAddApi, setCanAddApi] = useState(false)
    useEffect(() => {
        if (activeExchange == 'binance') {
            setActiveExchangeStyle({
                bybit: '',
                bitget: '',
                binance: 'selected',
            })
        }
        if (activeExchange == 'bybit') {
            setActiveExchangeStyle({
                bybit: 'selected',
                bitget: '',
                binance: '',
            })
        }
        if (activeExchange == 'bitget') {
            setActiveExchangeStyle({
                bybit: '',
                bitget: 'selected',
                binance: '',
            })
        }
    }, [activeExchange]);

    const handleUpdate = (e) => {
        if (canAddApi) {
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
    }

    const [api, setApi] = useState('')
    const [secret, setSecret] = useState('')

    const [printedError, setPrintedError] = useState('')

    useEffect(() => {
        validateKeySecret()
    }, [checked]);

    const validateKeySecret = () => {
        if (api.length != 18) {
            setPrintedError('API key length must be 18 characters')
            setCanAddApi(false)
        } else if (secret.length != 36) {
            setPrintedError('The length of the private key must be 36 characters')
            setCanAddApi(false)
        } else if (!checked) {
            setPrintedError('Please check the box that you understand how to use API keys')
            setCanAddApi(false)
        } else {
            setPrintedError('')
            setCanAddApi(true)
        }
    }

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
                    {/* <div className={"platform " + activeExchangeStyle.binance} onClick={() => setActiveExchange('binance')}> */}
                    <div className={"platform " + activeExchangeStyle.binance}>
                        {/* <div className="border"> */}
                        {/* </div> */}
                        <img src="img/pa/modal/platforms/lock.svg" alt="bybit" />
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
                    {/* <div className={"platform " + activeExchangeStyle.bitget} onClick={() => setActiveExchange('bitget')}> */}
                    <div className={"platform " + activeExchangeStyle.bitget}>
                        {/* <div className="border"> */}
                        {/* </div> */}
                        <img src="img/pa/modal/platforms/lock.svg" alt="bybit" />
                        <div className="img">
                            <img src="img/pa/modal/platforms/bitget.png" alt="bitget" />
                        </div>
                    </div>
                </div>
                {user.bybit.apiKey
                    ? <Input props={{
                        imageName: 'key.svg',
                        label: 'API key',
                        placeholder: user.bybit.apiKey,
                        onChange: (e) => setApi(e.target.value),
                        value: api,
                        onBlur: validateKeySecret
                    }} />
                    : <Input props={{
                        imageName: 'key.svg',
                        label: 'API key',
                        placeholder: 'Enter API key',
                        onChange: (e) => setApi(e.target.value),
                        value: api,
                        onBlur: validateKeySecret

                    }} />
                }
                {user.bybit.secret
                    ? <Input props={{
                        imageName: 'lock.svg',
                        label: 'Secret key',
                        placeholder: user.bybit.secret,
                        onChange: (e) => setSecret(e.target.value),
                        value: secret,
                        onBlur: validateKeySecret

                    }} />
                    : <Input props={{
                        imageName: 'lock.svg',
                        label: 'Secret key',
                        placeholder: 'Enter Secret key',
                        onChange: (e) => setSecret(e.target.value),
                        value: secret,
                        onBlur: validateKeySecret

                    }} />
                }

                <div className="errors">
                    <div className="error">
                        {printedError}
                    </div>
                </div>
                <div className="button_and_check">
                    <button className={canAddApi ? "send_info_button input_block_first" : "send_info_button input_block_first accept_btn_inactive"} onClick={handleUpdate}>Add API key</button>

                    <Checkbox checked={checked} setChecked={setChecked} label={'I understand how to use API keys'} />

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