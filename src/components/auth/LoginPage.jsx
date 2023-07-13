import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Images from './Images';


const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (event) => { setEmail(event.target.value); };
    const passwordChange = (event) => { setPassword(event.target.value); };


    const [printedError, setPrintedError] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    const navigate = useNavigate()
    const login = () => {
        axios.post('https://apisite.tradecoinai.com/api/users/login',
            {
                email: email,
                password: password,
            })
            .then(function (response) {
                setToken(response.data.token);
                navigate("/profile")
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
                        <img src="img/login/logo.svg" alt='logo' />
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
                        <Link to={"/login"} className="active" id="login_switcher">Log in</Link>
                        <Link to={"/signup"}>Sign up</Link >
                    </div>


                    <Input props={{
                        imageName: 'mail.svg',
                        label: 'Your e-mail',
                        placeholder: 'Enter your e-mail',
                        onChange: emailChange,
                        value: email,
                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Your password',
                        placeholder: 'Enter your password',
                        onChange: passwordChange,
                        value: password,
                        password: true
                    }} />
                    <div className="errors">
                        <div className="error">
                            {printedError}
                        </div>
                    </div>
                    <button className="accept_btn" onClick={login}>Log in</button>
                    <div className="forgot_password" id="forgot_password">
                        <div className="text">
                            Forgot your password
                        </div>
                        <Link to={"/forgot_password"} id="recovery_password">Recovery password</Link>
                    </div>
                </div>
            </div>
            <Images />
        </div>
    )
}

export default LoginPage