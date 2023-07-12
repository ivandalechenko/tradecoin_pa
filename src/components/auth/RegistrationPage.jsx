import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = (props) => {
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
                        Sign in to TradeCoinAi
                    </h1>
                    <h2>
                        Please,login or sign up to your account
                    </h2>
                    <div class="log_reg_switcher_buttons">
                        <Link to={"/login"} id="login_switcher">Log in</Link>
                        <Link to={"/signup"} class="active">Sign up</Link >
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
                    <div class="input_block" id="username">
                        <img src="img/login/user.svg" />
                        <div class="label_and_input">
                            <div class="label">
                                Your username
                            </div>
                            <input type="text" placeholder="Example: Trader23" />
                        </div>
                    </div>
                    <div id="create_password_label">
                        Create password
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
                    <div class="input_block" id="rpassword"
                    >
                        <img src="img/login/dots.svg" />
                        <div class="label_and_input">
                            <div class="inp">
                                <div class="label">
                                    Repeat password
                                </div>
                                <input type="text" placeholder="Repeat your password" />
                            </div>
                            <div class="eye">
                                <img src="img/login/eye.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="forgot_password" id="accept_terms" >
                        <button class="check_box" id="accept_t_and_p">
                            <img id="accept_t_and_p_check_img" src="img/login/check.svg" />
                        </button>
                        <div class="text">
                            I accept
                            <a href="#"> Terms & Condition </a>
                            and
                            <a href="#"> Privacy Policy </a>
                        </div>
                    </div>
                    <div class="log_reg_button">
                        <button id="btn_login">Registration</button>
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
                    <img src="img/login/usd.png" id="safe" />
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage