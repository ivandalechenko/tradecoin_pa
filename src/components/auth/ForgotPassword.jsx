import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Modal from '../modal/Modal';
import { forgotPasswordSendCodeAction } from '../../redux/userActions';
import useInput from '../../validation/useInput';

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "Forgot password - TradeCoinAI";
    }, []);
    const [modalType, setModalType] = useState('hidden')
    const email = useInput('', { isEmpty: true, isEmail: true })
    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [email.value])


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sendRestoreCode = () => {
        setModalType('loader')
        const data = {
            email: email.value,
        }
        dispatch(forgotPasswordSendCodeAction(data))
            .then(() => {
                setModalType('hidden')
                localStorage.setItem('email', email.value)
                navigate("/enter_code_reset_password")
            })
            .catch(function (error) {
                setModalType('hidden')
                setServerError(error)
            });
    }

    // const { isLoggedIn } = useSelector(state => state.userReducer)
    // if (isLoggedIn) return <Navigate to="/profile" replace />
    return (
        <div className="elements">
            <Modal modalType={modalType} setModalType={setModalType} />
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
                        <Input props={{
                            imageName: 'mail.svg',
                            label: 'Your e-mail',
                            placeholder: 'Enter your e-mail',
                            value: email.value,
                            onChange: email.onChange,
                            onBlur: email.onBlur,
                        }} />
                        <button className={email.isValid ? "accept_btn_form accept_btn_valid" : "accept_btn_form"} onClick={sendRestoreCode}>Send a code</button>

                        <div className="errors">

                            {
                                serverError
                                    ? <div className='error'>{serverError}</div>
                                    : <></>
                            }
                            {
                                email.isDirty
                                    ?
                                    <>
                                        {email.isEmpty ? <div className='error'>Enter Email</div> : <>
                                            {!email.isEmail ? <div className='error'>Please enter a valid Email</div> : <></>}
                                        </>}
                                    </>
                                    : <></>
                            }
                        </div>
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
        </div >
    )
}

export default ForgotPassword