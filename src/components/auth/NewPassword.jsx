import React from 'react';
import { Link } from 'react-router-dom';

const NewPassword = (props) => {
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
                            Create new password
                        </h2>

                        <div class="input_block" id="modal_password">
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
                        <div class="input_block" id="modal_rpassword">
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
                        <button class="send_code_btn" id="send_a_code">
                            Change password
                        </button>
                    </div>
                </div>
                <div class="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default NewPassword