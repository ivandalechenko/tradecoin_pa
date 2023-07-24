import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Images from './Images';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/userActions";
import useInput from "../../validation/useInput";



const LoginPage = ({ setAuthType }) => {
    useEffect(() => { document.title = "Login - TradeCoinAI"; }, []);
    const [modalType, setModalType] = useState('hidden')

    const email = useInput('', { isEmpty: true, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 32 })
    // const email = useInput('gepijeg766@mahmul.com', { isEmpty: true, isEmail: true })
    // const password = useInput('Ananasik95', { isEmpty: true, minLength: 6, maxLength: 32 })
    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [email.value, password.value])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = () => {
        if (email.isValid && password.isValid && !serverError) {
            setModalType('loader')
            const data = {
                email: email.value,
                password: password.value,
            }
            dispatch(loginAction(data))
                .then(() => {
                    setModalType('hidden')
                    navigate("/profile")
                })
                .catch(function (error) {
                    setModalType('hidden')
                    setServerError(error)
                });
        }
    }

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) return <Navigate to="/profile" replace />
    return (
        <>

            {/* <div className="elements"> */}
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="left transiton_show_hide" id="left">
                <div className="container" id="left_container">
                    <div className="logo">
                        <img src="/img/login/logo.svg" alt='logo' />
                        <div className="text">
                            TradeCoinAi
                        </div>
                    </div>
                    <h1>
                        Login to TradeCoinAi
                    </h1>
                    <h2>
                        Please, login or sign up to your account
                    </h2>
                    <div className="log_reg_switcher_buttons">
                        <button className="active" id="login_switcher">Log in</button>
                        <button onClick={() => setAuthType('signup')}>Sign up</button >
                        {/* <button onClick={() => setAuthType('signup')}>Sign up</button > */}
                    </div>


                    <Input props={{
                        imageName: 'mail.svg',
                        label: 'Your e-mail',
                        placeholder: 'Enter your e-mail',
                        value: email.value,
                        onChange: e => email.onChange(e),
                        onBlur: e => email.onBlur(e),
                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Your password',
                        placeholder: 'Enter your password',
                        value: password.value,
                        onChange: e => password.onChange(e),
                        onBlur: e => password.onBlur(e),
                        password: true
                    }} />
                    <button className={email.isValid && password.isValid && !serverError ? "accept_btn_form accept_btn_valid" : "accept_btn_form"} onClick={login}>Log in</button>
                    <div className="forgot_password" id="forgot_password">
                        <div className="text">
                            Forgot your password
                        </div>
                        <Link to={"/forgot_password"} id="recovery_password">Recovery password</Link>
                    </div>
                    <div className="errors">
                        {
                            serverError
                                ? <div className='error'>{serverError}</div>
                                : <></>
                        }
                        {
                            email.isDirty
                                ?
                                <>
                                    {email.isEmpty ? <div className='error'>Enter Email</div> : <>
                                        {!email.isEmail ? <div className='error'>Please enter a valid Email</div> : <></>}
                                    </>}
                                </>
                                : <></>
                        }
                        {
                            password.isDirty
                                ?
                                <>
                                    {password.isEmpty ? <div className='error'>Enter password</div> : <>
                                        {password.maxLength ? <div className='error'>Password length must be no more than 32 characters</div> : <></>}
                                        {password.minLength ? <div className='error'>Password length must be at least 6 characters</div> : <></>}
                                    </>}
                                </>
                                : <></>
                        }
                    </div>


                </div>

            </div>
            {/* <Images /> */}
            {/* </div> */}
        </>

    )
}

export default LoginPage