import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Images from './Images';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { registrationAction } from '../../redux/userActions';


const RegistrationPage = () => {
    const [modalType, setModalType] = useState('hidden')

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const emailChange = (event) => { setEmail(event.target.value); };
    const usernameChange = (event) => { setUsername(event.target.value); };
    const passwordChange = (event) => { setPassword(event.target.value); };
    const repeatPasswordChange = (event) => { setRepeatPassword(event.target.value); };


    const [printedError, setPrintedError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registration = () => {
        setModalType('loader')
        const data = {
            username: username,
            email: email,
            password: password,
        }
        dispatch(registrationAction(data))
            .then(() => {
                setModalType('hidden')
                navigate("/enter_code")
            })
            .catch(function (error) {
                setModalType('hidden')
                setPrintedError(error.response.data.message)
            });

    }

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) return <Navigate to="/profile" replace />

    return (
        <div className="elements">
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="left transiton_show_hide" id="left">
                <div className="container" id="left_container">
                    <div className="logo">
                        <img src="img/login/logo.svg" />
                        <div className="text">
                            TradeCoinAi
                        </div>
                    </div>
                    <h1>
                        Sign in to TradeCoinAi
                    </h1>
                    <h2>
                        Please,login or sign up to your account
                    </h2>
                    <div className="log_reg_switcher_buttons">
                        <Link to={"/login"} id="login_switcher">Log in</Link>
                        <Link to={"/signup"} className="active">Sign up</Link >
                    </div>

                    <Input props={{
                        imageName: 'mail.svg',
                        label: 'Your e-mail',
                        placeholder: 'Enter your e-mail',
                        onChange: emailChange,
                        value: email,
                    }} />
                    <Input props={{
                        imageName: 'user.svg',
                        label: 'Your username',
                        placeholder: 'Example: Trader23',
                        onChange: usernameChange,
                        value: username,
                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Your password',
                        placeholder: 'Enter your password',
                        onChange: passwordChange,
                        value: password,
                        password: true

                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Repeat password',
                        placeholder: 'Repeat your password',
                        onChange: repeatPasswordChange,
                        value: repeatPassword,
                        password: true
                    }} />
                    <div className="errors">
                        <div className="error">
                            {printedError}
                        </div>
                    </div>

                    <div className="forgot_password">
                        <div className="text">
                            <a href="#"> Terms & Condition </a>
                            and
                            <a href="#"> Privacy Policy </a>
                        </div>
                    </div>
                    <button className="accept_btn" onClick={registration}>Registration</button>
                </div>
            </div>
            <Images />
        </div>
    )
}

export default RegistrationPage