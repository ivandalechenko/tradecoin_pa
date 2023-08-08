import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Images from './Images';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { registrationAction } from '../../redux/userActions';
import Checkbox from '../UI/Checkbox';
import useInput from '../../validation/useInput';


const RegistrationPage = ({ setAuthType }) => {
    const [modalType, setModalType] = useState('hidden')
    useEffect(() => {
        document.title = "Sign up - TradeCoinAI";
    }, []);

    const [checked, setChecked] = useState(false)
    const email = useInput('', { isEmpty: true, isEmail: true })
    const username = useInput('', { isEmpty: true, minLength: 6, maxLength: 32 })
    const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 32 })
    const repeatPassword = useInput('', { isEmpty: true, isEquals: password.value })

    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [email.value, password.value, username.value, repeatPassword.value])

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registration = () => {
        if (email.isValid && username.isValid && password.isValid && repeatPassword.isValid && !serverError && checked) {
            setModalType('loader')
            var data = {
                username: username.value,
                email: email.value,
                password: password.value,
            }
            if (localStorage.getItem('refCode')) {
                data = { ...data, refCode: localStorage.getItem('refCode') }
            }
            dispatch(registrationAction(data))
                .then(() => {
                    setModalType('hidden')
                    localStorage.setItem('email', email.value)
                    navigate("/enter_code")
                })
                .catch(function (error) {
                    setModalType('hidden')
                    setServerError(error)
                });
        }
    }

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) return <Navigate to="/statistic" replace />

    return (
        // <div className="elements">
        <>
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="left transiton_show_hide" id="left">
                <div className="container" id="left_container">
                    <Link to="https://tradecoinai.com/" className="logo">
                        <img src="/img/login/logo.svg" />
                        <div className="text">
                            TradeCoinAi
                        </div>
                    </Link>
                    <h1>
                        Sign in to TradeCoinAi
                    </h1>
                    <h2>
                        Please, login or sign up to your account
                    </h2>
                    <div className="log_reg_switcher_buttons">
                        <button onClick={() => setAuthType('login')}>Log in</button>
                        <button className="active">Sign up</button >
                    </div>

                    <Input props={{
                        imageName: 'mail.svg',
                        label: 'Your e-mail',
                        placeholder: 'Enter your e-mail',
                        value: email.value,
                        onChange: email.onChange,
                        onBlur: email.onBlur
                    }} />
                    <Input props={{
                        imageName: 'user.svg',
                        label: 'Your username',
                        placeholder: 'Example: Trader23',
                        value: username.value,
                        onChange: username.onChange,
                        onBlur: username.onBlur
                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Your password',
                        placeholder: 'Enter your password',
                        value: password.value,
                        onChange: password.onChange,
                        onBlur: password.onBlur,
                        password: true,

                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Repeat password',
                        placeholder: 'Repeat your password',
                        value: repeatPassword.value,
                        onChange: repeatPassword.onChange,
                        onBlur: repeatPassword.onBlur,
                        password: true,
                    }} />

                    <div className="forgot_password">
                        <Checkbox
                            checked={checked}
                            setChecked={setChecked}
                            label={<>
                                <Link to="https://tradecoinai.com/terms.html"> Terms & Condition </Link>
                                and
                                <Link to="https://tradecoinai.com/policy.html"> Privacy Policy </Link>
                            </>}
                        />
                    </div>
                    <button className={email.isValid && username.isValid && password.isValid && repeatPassword.isValid && !serverError && checked ? "accept_btn_form accept_btn_valid" : "accept_btn_form"} onClick={registration}>Registration</button>
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
                            username.isDirty
                                ?
                                <>
                                    {username.isEmpty ? <div className='error'>Enter username</div> : <>
                                        {username.maxLength ? <div className='error'>Username length must be no more than 32 characters</div> : <></>}
                                        {username.minLength ? <div className='error'>Username length must be at least 6 characters</div> : <></>}
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
                        {
                            repeatPassword.isDirty
                                ?
                                <>
                                    {!repeatPassword.isEquals ? <div className='error'>Passwords must match</div> : <></>}
                                </>
                                : <></>
                        }
                    </div>
                </div>
            </div >
            {/* <Images /> */}
        </>
        // </div>
    )
}

export default RegistrationPage