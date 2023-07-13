import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterCode = (props) => {
    const [code, setCode] = useState(0)
    const codeChange = (event) => {
        setCode(event.target.value);
    };
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])
    const sendCode = () => {
        axios.post('https://apisite.tradecoinai.com/api/users/enterCode', {
            code: code,
        },
            {
                headers: {
                    'Authorization': localStorage.getItem('reg_token')
                },
            })
            .then(function (response) {
                setToken(response.data.token);
                navigate("/profile")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                            Enter code
                        </h2>
                        <div className="body" id="modal_body">
                            Provide us e-mail of your account and we will send a code to your mailbox
                        </div>
                        <div className="code_input" id="code_input">
                            <input type="number" className="code_input_element" placeholder="123456" onChange={codeChange} value={code} maxLength={6} />
                        </div>


                        <button className="send_code_btn" id="send_a_code" onClick={sendCode}>
                            Recover password
                        </button>


                        <div className="text_with_a" id="didnt_recieve_the_code">
                            I didn't receive the code?
                            <button>
                                Send again
                            </button>
                        </div>
                    </div>

                </div>
                <div className="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default EnterCode