import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Images from './Images';

const RegistrationPage = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const emailChange = (event) => { setEmail(event.target.value); };
    const usernameChange = (event) => { setUsername(event.target.value); };
    const passwordChange = (event) => { setPassword(event.target.value); };
    const repeatPasswordChange = (event) => { setRepeatPassword(event.target.value); };



    const [printedError, setPrintedError] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
        localStorage.setItem('reg_token', token)
    }, [token])

    const navigate = useNavigate()
    const registration = () => {
        axios.post('https://apisite.tradecoinai.com/api/users/signup',
            {
                username: username,
                email: email,
                password: password,
            })
            .then(function (response) {
                setToken(response.data.token);
                navigate("/enter_code")
            })
            .catch(function (error) {
                setPrintedError(error.response.data.message)
            });

    }
    return (
        <div className="elements">
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