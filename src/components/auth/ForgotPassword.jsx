import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const ForgotPassword = () => {

    useEffect(() => {
        document.title = "Forgot password - TradeCoinAI";
    }, []);
    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) return <Navigate to="/profile" replace />
    return (
        <div className="elements">
            <div className="modal_auth transiton_show_hide" id="modal_auth">
                <div className="modal_auth_inner">
                    <div className="back">
                        <Link to="/login">
                            <img src="img/login/left_arr.svg" />
                            Back to login
                        </Link>
                    </div>
                    <div className="form">
                        <h2 id="modal_h2">
                            Forget password?<br /> Not a problem
                        </h2>
                        <div className="input_block" id="modal_email">
                            <img src="img/login/mail.svg" />
                            <div className="label_and_input">
                                <div className="inp">
                                    <div className="label">
                                        Your email
                                    </div>
                                    <input type="text" placeholder="Enter your emal" />
                                </div>
                            </div>
                        </div>
                        <button className="send_code_btn" id="send_a_code">
                            Send a code
                        </button>
                        <button className="send_code_btn dnone" id="reset_password_button">
                            Recover password
                        </button>
                        <button className="send_code_btn dnone" id="change_password">
                            Change password
                        </button>

                    </div>
                    <div className="text_with_a" id="dont_have_account">
                        You don't have account yet?
                        <Link to={"/signup"} id="dont_have_account_btn">
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword