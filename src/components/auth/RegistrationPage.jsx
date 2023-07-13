import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage = (props) => {
    const [email, setEmail] = useState('')
    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const [username, setUsername] = useState('')
    const usernameChange = (event) => {
        setUsername(event.target.value);
    };
    const [password, setPassword] = useState('')
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
    const [repeatPassword, setRepeatPassword] = useState('')
    const repeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };
    const [token, setToken] = useState('');
    useEffect(() => {
        localStorage.setItem('token', token)
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
                console.log(error);
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
                    <div className="input_block" id="email">
                        <img src="img/login/mail.svg" />
                        <div className="label_and_input">
                            <div className="label">
                                Your e-mail
                            </div>
                            <input type="text" placeholder="Enter your e-mail" onChange={emailChange} value={email} />
                        </div>
                    </div>
                    <div className="input_block" id="username">
                        <img src="img/login/user.svg" />
                        <div className="label_and_input">
                            <div className="label">
                                Your username
                            </div>
                            <input type="text" placeholder="Example: Trader23" onChange={usernameChange} value={username} />
                        </div>
                    </div>
                    <div id="create_password_label">
                        Create password
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
                    <div className="input_block" id="rpassword"
                    >
                        <img src="img/login/dots.svg" />
                        <div className="label_and_input">
                            <div className="inp">
                                <div className="label">
                                    Repeat password
                                </div>
                                <input type="text" placeholder="Repeat your password" onChange={repeatPasswordChange} value={repeatPassword} />
                            </div>
                            <div className="eye">
                                <img src="img/login/eye.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="forgot_password" id="accept_terms" >
                        <button className="check_box" id="accept_t_and_p">
                            <img id="accept_t_and_p_check_img" src="img/login/check.svg" />
                        </button>
                        <div className="text">
                            I accept
                            <a href="#"> Terms & Condition </a>
                            and
                            <a href="#"> Privacy Policy </a>
                        </div>
                    </div>
                    <div className="log_reg_button">
                        <button id="btn_login" onClick={registration}>Registration</button>
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
                    <img src="img/login/usd.png" id="safe" />
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage