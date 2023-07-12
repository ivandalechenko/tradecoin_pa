import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
    return (
        <div class="elements">
            <div class="modal_auth transiton_show_hide" id="modal_auth">
                <div class="modal_auth_inner">
                    <div class="back">
                        <Link to="/login">
                            <img src="img/login/left_arr.svg" />
                            Back to login
                        </Link>
                    </div>
                    <div class="form">
                        <h2 id="modal_h2">
                            Forget password?<br /> Not a problem
                        </h2>
                        <div class="input_block" id="modal_email">
                            <img src="img/login/mail.svg" />
                            <div class="label_and_input">
                                <div class="inp">
                                    <div class="label">
                                        Your email
                                    </div>
                                    <input type="text" placeholder="Enter your emal" />
                                </div>
                            </div>
                        </div>
                        <button class="send_code_btn" id="send_a_code">
                            Send a code
                        </button>
                        <button class="send_code_btn dnone" id="reset_password_button">
                            Recover password
                        </button>
                        <button class="send_code_btn dnone" id="change_password">
                            Change password
                        </button>

                    </div>
                    <div class="text_with_a" id="dont_have_account">
                        You don't have account yet?
                        <Link to={"/signup"} id="dont_have_account_btn">
                            Sign up
                        </Link>
                    </div>
                </div>
                <div class="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword