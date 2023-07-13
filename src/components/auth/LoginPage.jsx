import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const [password, setPassword] = useState('')
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
    const [token, setToken] = useState('');
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
                console.log(error);
            });
    }
    // ferij14507@mahmul.com
    // trader9586
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
                        Login to TradeCoinAi
                    </h1>
                    <h2>
                        Please, login or sign up to your account
                    </h2>
                    <div className="log_reg_switcher_buttons">
                        <Link to={"/login"} className="active" id="login_switcher">Log in</Link>
                        <Link to={"/signup"}>Sign up</Link >
                    </div>
                    <div className="input_block" id="email">
                        <img src="img/login/mail.svg" />
                        <div className="label_and_input">
                            <div className="label">
                                Your e-mail
                            </div>
                            <input type="text" placeholder="Enter your e-mail" onChange={emailChange} value={email} />
                        </div>
                    </div>

                    <div className="input_block" id="password">
                        <img src="img/login/dots.svg" />
                        <div className="label_and_input">
                            <div className="inp">
                                <div className="label">
                                    Your password
                                </div>
                                <input type="text" placeholder="Enter your password" onChange={passwordChange} value={password} />
                            </div>
                            <div className="eye">
                                <img src="img/login/eye.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="log_reg_button">
                        <button id="btn_login" onClick={login}>Log in</button>
                    </div>
                    <div className="forgot_password" id="forgot_password">
                        <div className="text">
                            Forgot your password
                        </div>
                        <div className="a">
                            <Link to={"/forgot_password"} id="recovery_password">Recovery password</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right transiton_show_hide" id="right">
                <div className="line free_image">
                    <img src="img/login/line.png" />
                </div>
                <div className="eth free_image">
                    <img src="img/login/eth.png" />
                </div>
                <div className="btc free_image">
                    <img src="img/login/btc.png" />
                </div>
                <div className="shadow free_image">
                    <img src="img/login/shadow.png" />
                </div>
                <div className="safe free_image">
                    <img src="img/login/safe.png" id="safe" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage