import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import { updateTokensAction } from "../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '../UI/Checkbox';
import useInput from '../../validation/useInput';
import { Link } from 'react-router-dom';

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
        if (api.isValid && secret.isValid && checked) {
            e.preventDefault()
            if (activeExchange == 'binance') {
                const binance = {
                    apiKey: api.value,
                    secret: secret.value
                }
                dispatch(updateTokensAction({ binance })).then(() => {
                    api.reset()
                    secret.reset()
                    setModalType("hidden")
                }).catch((err) => {
                    setServerError(err)
                })
            }
            if (activeExchange == 'bybit') {
                const bybit = {
                    apiKey: api.value,
                    secret: secret.value
                }
                dispatch(updateTokensAction({ bybit })).then(() => {
                    api.reset()
                    secret.reset()
                    setModalType("hidden")
                }).catch((err) => {
                    setServerError(err)

                })
            }
            if (activeExchange == 'bitget') {
                const bitget = {
                    apiKey: api.value,
                    secret: secret.value
                }
                dispatch(updateTokensAction({ bitget })).then(() => {
                    api.reset()
                    secret.reset()
                    setModalType("hidden")
                }).catch((err) => {
                    setServerError(err)
                })
            }
        }
    }

    const [checked, setChecked] = useState(false)
    const [serverError, setServerError] = useState('')
    const api = useInput('', { eLength: 18 })
    const secret = useInput('', { eLength: 36 })
    useEffect(() => {
        setServerError('')
    }, [api.value, secret.value])


    return (

        <div className='modal modal_show' onClick={() => setModalType("hidden")}>
            <div onClick={(e) => e.stopPropagation()}>
                <div id="inner_add_api" className="modal_inner">
                    <div className="header">
                        <div className="name">
                            <img src="/img/pa/modal/key.svg" alt="key" />
                            <div className="text">
                                Add crypto-key API
                            </div>
                        </div>
                        <img className="modal_closer" src="/img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
                    </div>
                    <div className="content">
                        <div className="platforms">
                            {/* <div className={"platform " + activeExchangeStyle.binance} onClick={() => setActiveExchange('binance')}> */}
                            <div className={"platform " + activeExchangeStyle.binance}>
                                {/* <div className="border"> */}
                                {/* </div> */}
                                <img src="/img/pa/modal/platforms/lock.svg" alt="bybit" />
                                <div className="img">
                                    <img src="/img/pa/modal/platforms/binance.svg" alt="binance" />
                                </div>
                            </div>
                            <div className={"platform " + activeExchangeStyle.bybit} onClick={() => setActiveExchange('bybit')}>
                                <div className="border">
                                </div>

                                <div className="img">
                                    <img src="/img/pa/modal/platforms/bybit.svg" alt="bybit" />
                                </div>
                            </div>
                            {/* <div className={"platform " + activeExchangeStyle.bitget} onClick={() => setActiveExchange('bitget')}> */}
                            <div className={"platform " + activeExchangeStyle.bitget}>
                                {/* <div className="border"> */}
                                {/* </div> */}
                                <img src="/img/pa/modal/platforms/lock.svg" alt="bybit" />
                                <div className="img">
                                    <img src="/img/pa/modal/platforms/bitget.png" alt="bitget" />
                                </div>
                            </div>
                        </div>
                        {user.bybit.apiKey
                            ? <Input props={{
                                imageName: 'key.svg',
                                label: 'API key',
                                placeholder: user.bybit.apiKey,
                                value: api.value,
                                onChange: api.onChange,
                                onBlur: api.onBlur
                            }} />
                            : <Input props={{
                                imageName: 'key.svg',
                                label: 'API key',
                                placeholder: 'Enter API key',
                                value: api.value,
                                onChange: api.onChange,
                                onBlur: api.onBlur

                            }} />
                        }
                        {user.bybit.secret
                            ? <Input props={{
                                imageName: 'lock.svg',
                                label: 'Secret key',
                                placeholder: user.bybit.secret,
                                value: secret.value,
                                onChange: secret.onChange,
                                onBlur: secret.onBlur

                            }} />
                            : <Input props={{
                                imageName: 'lock.svg',
                                label: 'Secret key',
                                placeholder: 'Enter Secret key',
                                value: secret.value,
                                onChange: secret.onChange,
                                onBlur: secret.onBlur

                            }} />
                        }


                        <div className="button_and_check">
                            <button className={api.isValid && secret.isValid && checked ? "accept_btn_form accept_btn_valid" : "accept_btn_form "} onClick={handleUpdate}>Add API key</button>

                            <Checkbox checked={checked} setChecked={setChecked} label={'I understand how to use API keys'} />

                        </div>
                        <div className="errors">
                            {
                                serverError
                                    ? <div className='error'>{serverError}</div>
                                    : <></>
                            }
                            {
                                api.isDirty &&
                                <>
                                    {!api.eLength && <div className='error'>API key length must be 18 characters</div>}
                                </>
                            }
                            {
                                secret.isDirty &&
                                <>
                                    {!secret.eLength && <div className='error'>Secret key length must be 36 characters</div>}
                                </>
                            }
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
                                                Login/Sign up on <Link to='https://www.bybit.com/invite?ref=9PPZMB'>Bybit</Link>
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
                                                Create API key (Read-Write)
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
                                                Add keys to TradeCoinAI
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="https://tradecoinai.com/guide.html" target="_blank" className="notice">
                                <div className="wrapper">

                                    <img src="/img/pa/notice.svg" alt="notice" />
                                    <div className="text">
                                        <div className="head">
                                            Important!
                                        </div>
                                        <div className="info">
                                            Guide for creating API key
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddApi