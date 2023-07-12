import React from 'react';
import { Link } from 'react-router-dom';

const EnterCode = (props) => {
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
                            Enter code
                        </h2>



                        <div class="body" id="modal_body">
                            Provide us e-mail of your account and we will send a code to your mailbox
                        </div>
                        <div class="code_input" id="code_input">
                            <input type="text" class="code_input_element" placeholder="1" maxlength="1" />
                            <input type="text" class="code_input_element" placeholder="2" maxlength="1" />
                            <input type="text" class="code_input_element" placeholder="3" maxlength="1" />
                            <input type="text" class="code_input_element" placeholder="4" maxlength="1" />
                            <input type="text" class="code_input_element" placeholder="5" maxlength="1" />
                            <input type="text" class="code_input_element" placeholder="6" maxlength="1" />
                        </div>


                        <button class="send_code_btn" id="send_a_code">
                            Recover password
                        </button>


                        <div class="text_with_a" id="didnt_recieve_the_code">
                            I didn't receive the code?
                            <button>
                                Send again
                            </button>
                        </div>
                    </div>

                </div>
                <div class="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default EnterCode