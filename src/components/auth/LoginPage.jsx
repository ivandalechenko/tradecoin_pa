import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div class="elements">
            <div class="left transiton_show_hide" id="left">
                <div class="container" id="left_container">
                    <div class="logo">
                        <img src="img/login/logo.svg" />
                        <div class="text">
                            TradeCoinAi
                        </div>
                    </div>
                    <h1>
                        Login to TradeCoinAi
                    </h1>
                    <h2>
                        Please, login or sign up to your account
                    </h2>
                    <div class="log_reg_switcher_buttons">
                        <Link to={"/login"} class="active" id="login_switcher">Log in</Link>
                        <Link to={"/signup"}>Sign up</Link >
                    </div>
                    <div class="input_block" id="email">
                        <img src="img/login/mail.svg" />
                        <div class="label_and_input">
                            <div class="label">
                                Your e-mail
                            </div>
                            <input type="text" placeholder="Enter your e-mail" />
                        </div>
                    </div>

                    <div class="input_block" id="password">
                        <img src="img/login/dots.svg" />
                        <div class="label_and_input">
                            <div class="inp">
                                <div class="label">
                                    Your password
                                </div>
                                <input type="text" placeholder="Enter your password" />
                            </div>
                            <div class="eye">
                                <img src="img/login/eye.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="log_reg_button">
                        <button id="btn_login">Log in</button>
                    </div>
                    <div class="forgot_password" id="forgot_password">
                        <div class="text">
                            Forgot your password
                        </div>
                        <div class="a">
                            <Link to={"/forgot_password"} id="recovery_password">Recovery password</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right transiton_show_hide" id="right">
                <div class="line free_image">
                    <img src="img/login/line.png" />
                </div>
                <div class="eth free_image">
                    <img src="img/login/eth.png" />
                </div>
                <div class="btc free_image">
                    <img src="img/login/btc.png" />
                </div>
                <div class="shadow free_image">
                    <img src="img/login/shadow.png" />
                </div>
                <div class="safe free_image">
                    <img src="img/login/safe.png" id="safe" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage