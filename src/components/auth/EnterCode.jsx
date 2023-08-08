import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { enterCodeAction, forgotPasswordSendCodeAction } from '../../redux/userActions';
import useInput from '../../validation/useInput';

import { successNotification } from '../../redux/notificationActions';

const EnterCode = ({ action }) => {
    const [modalType, setModalType] = useState('hidden')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const code = useInput('', { isEmpty: true, length: 6 })


    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [code.value])

    const sendCode = () => {
        setModalType('loader')
        const data = {
            code: code.value,
        }
        dispatch(enterCodeAction(data))
            .then(() => {
                setModalType('hidden')
                if (action == 'registration') {
                    navigate("/profile")
                }
                if (action == 'restore_password') {
                    navigate("/new_password")
                }
            })
            .catch(function (error) {
                setModalType('hidden')
                setServerError(error)
            });

    }

    const resendCode = () => {
        setModalType('loader')
        const data = {
            email: localStorage.getItem('email')
        }
        dispatch(forgotPasswordSendCodeAction(data))
            .then(() => {
                setModalType('hidden')
                successNotification('Code successfully resent')
            })
            .catch(function (error) {
                setModalType('hidden')
                setServerError(error)
            });
    }


    useEffect(() => {
        document.title = "Enter code - TradeCoinAI";
    }, []);
    return (
        <div className="elements">
            {action == 'registration' && <>
                <script src='enterCodeMetric.js'>
                </script>
                <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=675649941045710&ev=PageView&noscript=1"
                /></noscript>
            </>}

            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="modal_auth transiton_show_hide" id="modal_auth">
                <div className="modal_auth_inner">
                    <div className="back">
                        <Link to="/auth/login">
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
                            <input type="text" className="code_input_element" placeholder="123456" onChange={code.onChange} value={code.value} onBlur={code.onBlur} />
                        </div>


                        <div className="errors">
                            {
                                serverError
                                    ? <div className='error'>{serverError}</div>
                                    : <></>
                            }
                            {
                                code.isDirty
                                    ?
                                    <>
                                        {code.isEmpty ? <div className='error'>Enter code</div> : <>
                                            {!code.length ? <div className='error'>Code length must be 6 characters</div> : <></>}
                                        </>}
                                    </>
                                    : <></>
                            }
                        </div>

                        <button className="send_code_btn" id="send_a_code" onClick={sendCode}>
                            {action == 'registration'
                                ? <>Sign Up</>
                                : <>Recover password</>
                            }

                        </button>


                        <div className="text_with_a" id="didnt_recieve_the_code">
                            I didn't receive the code?
                            <button onClick={resendCode}>
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