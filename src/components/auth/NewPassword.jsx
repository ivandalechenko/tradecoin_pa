import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const NewPassword = ({ logged }) => {
    if (logged) return <Navigate to="/profile" replace />
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
                            Create new password
                        </h2>

                        <div className="input_block" id="modal_password">
                            <img src="img/login/dots.svg" />
                            <div className="label_and_input">
                                <div className="inp">
                                    <div className="label">
                                        Your password
                                    </div>
                                    <input type="text" placeholder="Enter your password" />
                                </div>
                                <div className="eye">
                                    <img src="img/login/eye.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="input_block" id="modal_rpassword">
                            <img src="img/login/dots.svg" />
                            <div className="label_and_input">
                                <div className="inp">
                                    <div className="label">
                                        Repeat password
                                    </div>
                                    <input type="text" placeholder="Repeat your password" />
                                </div>
                                <div className="eye">
                                    <img src="img/login/eye.svg" />
                                </div>
                            </div>
                        </div>
                        <button className="send_code_btn" id="send_a_code">
                            Change password
                        </button>
                    </div>
                </div>
                <div className="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default NewPassword